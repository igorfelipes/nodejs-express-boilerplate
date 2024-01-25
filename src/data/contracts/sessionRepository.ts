import { LoadOneSessionInput, LoadOneSessionResponse } from '../../app/session/types'
import { Session } from '../../domain/entities/session'

export interface SessionRepository {
  create: (
    userId: string,
    token: string,
    expireDate: number,
    userAgent: string | undefined
  ) => Promise<Session | undefined>;

  loadOne: (data: LoadOneSessionInput) => Promise<LoadOneSessionResponse | undefined>;
}
