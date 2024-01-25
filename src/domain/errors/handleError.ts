import { BaseError } from './base/baseError';


const handleError = (genericErrorCode: string, genericErrorMessage: string, error: Error) => {
	 return new BaseError({
		code: genericErrorCode,
		message: genericErrorMessage,
		details: {
			reference: error.message,
		}
	 })
}

export default handleError