import { NextFunction, Request, Response } from 'express'
import { Code } from '../../constants/ResponseCodes'
import { HttpError } from '../../lib/error/HttpError'

export const apiKey = (req: Request, res: Response, next: NextFunction) => {
	// const apiKey = req.headers["x-api-key"] as string;
	
	// const apiKeyList = process.env.API_KEY_LIST?.split(","); //TODO: add env validation

	// if (apiKey && apiKeyList?.includes(apiKey)) {
	// 	return next();
	// }

	// return next(
	// 	new HttpError({
	// 		message: "Not authorized",
	// 		status: Code.FORBIDDEN,
	// 	})
	// );
};