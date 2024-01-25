import { SessionMysqlRepository } from '../../repository/sessionMysqlRespository'
import { UserMysqlRepository } from '../../repository/userMysqlRepository'

export const makeUserMysqlRepository = (): UserMysqlRepository => 
  new UserMysqlRepository();

export const makeSessionMysqlRepository = (): SessionMysqlRepository => 
  new SessionMysqlRepository();
