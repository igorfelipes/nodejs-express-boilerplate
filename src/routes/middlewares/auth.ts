import { Request } from "express";
import { isExpired, verifyToken } from "../../app/session/utils";
import { Code } from "../../constants/ResponseCodes";
import { makeSessionService } from "../../infra/factories/services/sessionServiceFactory";
import { makeUserService } from "../../infra/factories/services/userServiceFactory";
import { HttpError } from "../../lib/error/HttpError";

const sessionService = makeSessionService();
const userService = makeUserService();

export const auth = async (req: Request) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token && !Array.isArray(token)) {
      const decoded = verifyToken(token) as { id: string };
      if (isExpired(token)) {
        throw new HttpError({
          message: "Token has expired",
          status: Code.FORBIDDEN,
        });
      }
      const latestToken = await sessionService.loadOne({
        userId: decoded.id,
      });
      if (latestToken?.token !== token) {
        throw new HttpError({
          message: "Token has expired",
          status: Code.FORBIDDEN,
        });
      }
      const user = await userService.loadById(decoded.id);

      if (!user) {
        throw new HttpError({
          message: "Not authorized",
          status: Code.UNAUTHORIZED,
        });
      }
      const { id, name } = user;
      req.user = {
        id: id!,
        name,
      };
      return;
    }
    throw new HttpError({
      message: "Not authorized",
      status: Code.UNAUTHORIZED,
    });
  } catch (err: any) {
    throw new HttpError({
      message: err.message,
      status: Code.FORBIDDEN,
    });
  }
};
