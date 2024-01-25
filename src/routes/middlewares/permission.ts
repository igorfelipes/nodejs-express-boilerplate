// import { NextFunction, Request, Response } from "express";
// import { Code } from "../../constants/ResponseCodes";
// import { HttpError } from "../../lib/error/HttpError";
// import { Controller } from "../../types/routes";

// export const validatePermission = (
//   permission: string | string[]
// ): Controller => {
//   return async (req: Request, _: Response, next: NextFunction) => {
//     const { user } = req;

//     if (!user)
//       // TODO: Refactor this to ErrorCodes pattern
//       throw new HttpError({
//         message: "user not logged in",
//         status: Code.UNAUTHORIZED,
//       });

//     if (user.role) {
//       if (Array.isArray(permission)) {
//         if (
//           permission.every((p) =>
//             user.role!.permissions.some(({ name }) => name === p)
//           )
//         )
//           return next();
//       } else {
//         if (permission === "admin" && user.role.name === "admin") {
//           return next();
//         } else if (
//           user.role.permissions.some(({ name }) => name === permission)
//         )
//           return next();
//       }
//     }

//     return next(
//       // TODO: Refactor this to ErrorCodes pattern
//       new HttpError({
//         message: "not authorized",
//         status: Code.UNAUTHORIZED,
//       })
//     );
//   };
// };
