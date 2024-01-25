import { sign, verify, decode, JwtPayload } from "jsonwebtoken";
import { Code } from "../../constants/ResponseCodes";
import { HttpError } from "../../lib/error/HttpError";
import {
  getJsonWebTokenExpiresIn,
  getJsonWebTokenSecret,
} from "../../common/env";

export const createNewToken = (payload: any) => {
  const token = sign(payload, getJsonWebTokenSecret(), {
    expiresIn: getJsonWebTokenExpiresIn(),
  });
  const decoded = decodeToken(token) as JwtPayload;
  if (!decoded.exp) {
    throw new HttpError({
      message: "something went wrong",
      status: Code.INTERNAL_SERVER_ERROR,
      err: {
        message: "decoded exp undefined",
      },
    });
  }

  return {
    token,
    expireDate: decoded.exp,
  };
};

export const verifyToken = (token: string) => {
  return verify(token, getJsonWebTokenSecret());
};

export const decodeToken = (token: string) => {
  return decode(token);
};

export const isExpired = (token: string) => {
  const decoded = decodeToken(token);
  if (!decoded || typeof decoded === "string") {
    return true;
  }

  const exp = decoded.exp!;
  const now = Date.now() / 1000;

  return exp < now;
};
