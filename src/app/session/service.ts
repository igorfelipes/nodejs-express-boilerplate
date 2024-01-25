import { SessionRepository } from '../../data/contracts/sessionRepository'
import { ErrorCode } from "../../domain/errors/errorCode";
import { CreateSession, LoadOneSession } from "../../domain/usecases/session";
import { AuthenticateUser, LoadUserById } from "../../domain/usecases/user";
import {
  LoadOneSessionInput,
  LoadOneSessionResponse,
  SessionCreate,
  SessionResponse,
} from "./types";
import { createNewToken } from "./utils";

export class SessionService implements CreateSession, LoadOneSession {
  constructor(
    private readonly repository: SessionRepository,
    private readonly userService: AuthenticateUser & LoadUserById,
  ) {}

  async create(
    data: SessionCreate,
    userAgent: string | undefined
  ): Promise<SessionResponse> {
    const user = await this.userService.authenticate(data.email, data.password);
    const { id, name, email } = user;
    if (!id) throw ErrorCode.SESSION.NOT_FOUND;

    const { token, expireDate } = createNewToken({ id, name, email });
    await this.repository.create(id, token, expireDate, userAgent);
    return { token, user };
  }
  
  async loadOne(data: LoadOneSessionInput): Promise<LoadOneSessionResponse> {
    const session = await this.repository.loadOne(data);
    if (!session) throw ErrorCode.SESSION.NOT_FOUND;
    return session;
  }
}
