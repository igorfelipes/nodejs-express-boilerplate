import { NextFunction, Request, Response } from "express";
import { Permissions } from "../constants/Permissions";
import { Role } from "../constants/Roles";

type Method = "get" | "post" | "put" | "delete" | "patch";

type Return =
  | { [key: string]: any; meta?: { page: number; limit: number; search?: any } }
  | string
  | void
  | any;

export interface Controller {
  (req: Request, res: Response, next: NextFunction): Promise<Return> | Return;
}

export interface Route {
  path: string;
  method: Method;
  controller: Controller;
  middlewares?: Controller[];
  routes?: Route[];
}

export interface Router {
  basePath?: string;
  permission?: Permissions | Permissions[];
  routes: Route[];
}
