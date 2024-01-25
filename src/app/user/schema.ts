import { searchCommon } from "../../types/searchCommon";
import { z } from "zod";
import {
  cuid,
  emailString,
  numberSchema,
  simpleOrArray,
  stringSchema,
  ufString,
  zipcodeString,
} from "../../common/zod";


export const userSchema = z.object({
  id: cuid,
  name: stringSchema,
  email: emailString,
  password: stringSchema,
});

export const user = z.object({
  id: cuid,
  name: stringSchema,
  email: emailString,
  password: stringSchema,
});


export const userCreate = userSchema.omit({ id: true });
export const userUpdate = userCreate.partial();

