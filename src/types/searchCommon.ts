import { Limit } from "../constants/Resquest";
import { z } from "zod";

export const searchCommon = z.object({
  page: z
    .number()
    .or(z.string().regex(/\d+/).transform(Number))
    .refine((n) => n > 0, { message: "Page must be greater than 1" })
    .default(1),
  limit: z
    .number()
    .or(z.string().regex(/\d+/).transform(Number))
    .default(Limit.DEFAULT)
    .refine((n) => n >= Limit.MIN && n <= Limit.MAX, {
      message: `Limit must be >= ${Limit.MIN} and <= ${Limit.MAX}`,
    }),
});
