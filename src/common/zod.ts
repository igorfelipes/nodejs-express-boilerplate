import { z, ZodSchema } from "zod";

// Strings
export const stringSchema = z.string().trim();

export const lowerCaseString = stringSchema.transform((v) => v.toLowerCase());

export const emailString = stringSchema.email();

export const objectIdStringSchema = z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
  message: 'is not a valid ObjectId',
});

export const objectIdStringPathParam = z.object({ id: objectIdStringSchema });

export const cuid = stringSchema.cuid();

// export const idStringPathParam = z.object({ id: cuid });
export const idStringPathParam = z.object({ id: stringSchema });

export const UserIdStringPathParam = z.object({ userId: cuid });


export const dateSchemaMin = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date().min(new Date()));

export const dateSchema = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date());

export const ufString = stringSchema
  .length(2)
  .transform((v) => v.toUpperCase());

//TODO: Validate this types
export const phoneString = stringSchema.length(11);

export const zipcodeString = stringSchema.length(8);

export const cnpjString = stringSchema.length(14);

// Numbers
export const numberSchema = stringSchema
  .refine(
    (v) => !isNaN(+v),
    () => {
      return { message: "is not a valid number" };
    }
  )
  .transform(Number)
  .or(z.number());

export const nonZeroNumberSchema = numberSchema.refine(
  (v) => v > 0,
  () => {
    return { message: "must be greater than 0" };
  }
);

export const integerNumberSchema = stringSchema
  .refine(
    (v) => !isNaN(+v),
    () => {
      return { message: "is not a valid number" };
    }
  )
  .transform(Number)
  .refine(
    (v) => Number.isInteger(v),
    () => {
      return { message: "is not an integer" };
    }
  )
  .or(z.number().int());

export const idNumberPathParam = z.object({ id: numberSchema });

export const monetaryValueInCentsSchema = z
.number()
.int()
.min(0, "O valor monetário em centavos não pode ser negativo.")
.transform((val) => Math.round(val)); 


// Complex types
export const simpleOrArray = <T>(o: ZodSchema<T>) => o.or(z.array(o));

export const enumNumberSchema = (...numbers: number[]) =>
  stringSchema
    .refine(
      (v) => !isNaN(+v),
      () => {
        return { message: "is not a valid number" };
      }
    )
    .transform(Number)
    .or(z.number())
    .refine(
      (v) => numbers.includes(v),
      () => {
        return { message: `is invalid. Valid numbers: ${numbers}` };
      }
    );

export const booleanSchema = z.boolean().nullish().default(true);

export const ageSchema = dateSchema.refine(
  (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age > 18;
  },
  { message: "Customer must be 18 years old or older" }
);

export const orderBySchema = z
  .string()
  .optional()
  .refine((value) => value === "asc" || value === "desc", {
    message:
      'The "orderBy" property must be a string with the value "desc", "asc", or undefined.',
  });

export const prizeDrawStatusSchema = z
  .string()
  .optional()
  .refine((value) => value === "wasDraw" || value === "notDraw", {
    message:
      'The "status" property must be a string with the value "wasDraw", "notDraw", or undefined.',
  });

export const periodSchema = z
  .string()
  .optional()
  .refine(
    (value) =>
      value === "today" || value === "lastWeek" || value === "lastMonth",
    {
      message:
        'The "period" property must be a string with the value "today", "lastWeek", "lastMonth" or undefined.',
    }
  );

export const yearSchema = z.number().int().min(1900).max(2022)
