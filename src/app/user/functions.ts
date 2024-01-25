import { Controller } from "../../types/routes";
import userHandler from "./controller";
import { UserCreate} from "./types";

export const search: Controller = async (req, res) => {
  const result = await userHandler.search();
  res.send(result);
};


export const showOne: Controller = async (req, res) => {
  const id = req.params.id as unknown as string;
  const result = await userHandler.showOne(id);
  res.send(result);
};

export const create: Controller = async (req, res) => {
  const body = req.body as UserCreate;
  const result = await userHandler.create(body);
  res.send(result);
};

export const update: Controller = async (req, res) => {
  const body = req.body as UserCreate;
  const id = req.params.id as unknown as string;
  const result = await userHandler.update(id, body);
  res.send(result);
};

export const remove: Controller = async (req, res) => {
  const id = req.params.id as unknown as string;
  const result = await userHandler.remove(id);
  res.sendStatus(204);
};
