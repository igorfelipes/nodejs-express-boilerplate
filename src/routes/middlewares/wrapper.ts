import { NextFunction, Request, Response } from "express";

export const wrapper =
  (fn: any, opt?: { middleware: boolean }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (opt?.middleware) {
        await fn(req, res, next);
        return next();
      } else {
        const controllerResponse = await fn(req, res, next);
        return controllerResponse
        // return res.json(controllerResponse);
      }
    } catch (err) {
      return next(err);
    }
  };
