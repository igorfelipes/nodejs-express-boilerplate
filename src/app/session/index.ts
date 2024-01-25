import { Router } from "../../types/routes";
import { validate } from "../../routes/middlewares";
import { create } from "./functions";
import { sessionCreate } from "./schema";


const router: Router = {
	basePath: "sessions",
	routes: [
		{
			path: "/",
			method: "post",
			controller: create,
			middlewares: [validate({ body: sessionCreate })],
		},
	],
};

export default router;
