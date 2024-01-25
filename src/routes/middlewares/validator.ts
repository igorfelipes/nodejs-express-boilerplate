import { NextFunction, Response, Request } from "express";
import { AnyZodObject } from "zod";

interface Schema {
  body?: AnyZodObject;
  query?: AnyZodObject;
  params?: AnyZodObject;
}

export const validate = (schema: Schema) => {
  return async (req: Request, _: Response, next: NextFunction) => {
    try {
      if (schema.body) {
        req.body = await schema.body.strict().parseAsync(req.body);
      }
      if (schema.query) {
        req.query = await schema.query.strict().parseAsync(req.query);
      }
      if (schema.params) {
        req.params = await schema.params.strict().parseAsync(req.params);
      }
      return next();
    } catch (err) {
      next(err);
    }
  };
};
