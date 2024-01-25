import { LoadOneSessionInput, LoadOneSessionResponse, SessionCreate, SessionResponse } from '../../app/session/types'

export interface CreateSession {
  create: (
    data: SessionCreate,
    userAgent: string | undefined
  ) => Promise<SessionResponse>;
}
export interface LoadOneSession {
  loadOne: (data: LoadOneSessionInput) => Promise<LoadOneSessionResponse>;
}