import { z } from "zod";
import { stringSchema } from "../../common/zod";

export const sessionCreate = z.object({
  email: stringSchema,
  password: stringSchema,
});