import { validate, wrapper } from "../../routes/middlewares";
import { auth } from "../../routes/middlewares/auth";
import { Router } from "../../types/routes";
import { idStringPathParam, objectIdStringPathParam } from "./../../common/zod";
import {
  create,
  remove,
  search,
  showOne,
  update,
} from "./functions";
import { userCreate, userUpdate } from "./schema";

const router: Router = {
  basePath: "users",
  routes: [
    {
      path: "/",
      method: "get",
      controller: search,
    },
    {
      path: "/:id",
      method: "get",
      controller: showOne,
      middlewares: [validate({ params: objectIdStringPathParam })],
    },
    {
      path: "/",
      method: "post",
      controller: create,
      middlewares: [validate({ body: userCreate })],
    },
    {
      path: "/:id",
      method: "put",
      controller: update,
      middlewares: [validate({ params: idStringPathParam, body: userUpdate })],
    },
    {
      path: "/:id",
      method: "delete",
      controller: remove,
      middlewares: [validate({ params: idStringPathParam })],
    },
  ],
};

export default router;
