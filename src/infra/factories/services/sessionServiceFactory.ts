import { SessionService } from '../../../app/session/service'
import { makeSessionMysqlRepository } from '../repos'
import { makeUserService } from './userServiceFactory'

export const makeSessionService = (): SessionService => {
	const repository = makeSessionMysqlRepository();
	const userService = makeUserService();
	return new SessionService(repository, userService);
}