import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { Code } from "../../constants/ResponseCodes";
import { BaseError } from "../../domain/errors/base/baseError";
import BusinessError from "../../domain/errors/businessError";
import IntegrationError from "../../domain/errors/integrationError";
import { HttpError } from "../../lib/error/HttpError";

export const error = async (
  err: any,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: Add more error handling
  if (err) {
    console.log(JSON.stringify(err.constructor.name));
    if (
      err instanceof BusinessError ||
      err instanceof IntegrationError ||
      err instanceof BaseError
    ) {
      return res.status(400).json({
        error: err,
      });
    }
    if (err instanceof HttpError) {
      return res.status(err.getStatus()).json({
        code: "HTTP-ERROR",
        message: `Requisição inválida`,
        details: {
          reference: "InternalServer",
          detail: err.getMessage(),
        },
      });
    } else if (err instanceof z.ZodError) {
      return res.status(400).json({
        code: "ZOD-VALIDATOR-ERROR",
        message: `Requisição inválida`,
        details: {
          reference: "ZodValidator",
          detail: err.issues.map(
            (i) => `${i.path.join(".")} ${i.message.toLowerCase()}`
          ),
        },
      });
    } else {
      console.log("❌ Error:", err);
      res.status(Code.INTERNAL_SERVER_ERROR).json({
        code: "INTERNAL-SERVER-ERROR",
        message: `Requisição inválida`,
        details: {
          reference: "InternalServer",
          detail: JSON.stringify(err),
        },
      });
    }
  }
  return next();
};
