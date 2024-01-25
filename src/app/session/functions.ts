import { Controller } from "../../types/routes";
import sessionHandler from "./controller";
import { SessionCreate } from './types'

export const create: Controller = async (req, res) => {
  const body = req.body as SessionCreate;
  const result = await sessionHandler.create(body, req);
  res.send(result);
};
