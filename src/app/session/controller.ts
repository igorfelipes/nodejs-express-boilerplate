import { Request as ExpressRequest } from "express";
import { Body, Post, Request, Route, Tags } from "tsoa";
import {
  CreateSession,
} from "../../domain/usecases/session";
import { makeSessionService } from "../../infra/factories/services/sessionServiceFactory";
import { SessionCreate, SessionResponse } from './types'

const service = makeSessionService();

@Tags("Session")
@Route("sessions")
class SessionHandler {
  constructor(private readonly service: CreateSession) {}

  @Post("")
  async create(@Body() body: SessionCreate, @Request() req: ExpressRequest) {
    const userAgent = req.headers["user-agent"] as string;
    const response = await this.service.create(body, userAgent);
    return response as SessionResponse;
  }
}

export default new SessionHandler(service);
