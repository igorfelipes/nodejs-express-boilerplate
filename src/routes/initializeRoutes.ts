import { Router as ExpressRouter } from "express";
import { Controller, Router } from "../types/routes";
import { wrapper } from "./middlewares";
// import { validatePermission } from "./middlewares/permission";

const initializeRoutes = (
  router: ExpressRouter,
  ...routesToInitialize: Router[]
) => {
  routesToInitialize.forEach(
    ({ routes: entityRoutes, basePath, permission }) => {
      entityRoutes.forEach(({ method, path, controller, middlewares }) => {
        const realMiddleware: Controller[] = [];

        // if (permission) {
        //   realMiddleware.push(validatePermission(permission));
        // }
        if (middlewares && middlewares.length > 0) {
          realMiddleware.push(...middlewares);
          router[method](
            basePath ? `/${basePath}${path}` : path,
            ...realMiddleware,
            wrapper(controller)
          );
        } else {
          router[method](
            basePath ? `/${basePath}${path}` : path,
            ...realMiddleware,
            wrapper(controller)
          );
        }
      });
    }
  );
};

export default initializeRoutes;
