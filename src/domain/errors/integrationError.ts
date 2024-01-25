import { BaseError, ErrorParams } from './base/baseError'

export default class IntegrationError extends BaseError {
	constructor(params: ErrorParams) {
		super(params);
	}
}