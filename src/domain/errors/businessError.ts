import { BaseError, ErrorParams } from './base/baseError'

export default class BusinessError extends BaseError {
	constructor(params: ErrorParams) {
		super(params);
	}
}