import { LoadOneSessionInput, LoadOneSessionResponse } from '../../app/session/types'
import { SessionRepository } from '../../data/contracts/sessionRepository'
import { Session } from '../../domain/entities/session'
import { prisma } from "../../database/client";


export class SessionMysqlRepository implements SessionRepository {

	adaptToDomain(data: any): Session {
		return {
			id: data._id,
			userId: data.userId,
			token: data.token,
			expires: data.expires,
			userAgent: data.userAgent
		}
	}

	async create(
		userId: string,
		token: string,
	): Promise<Session | undefined> {
		const session = await  prisma.session.create({
			data: {
			userId,
			token,
			}
		})

		return this.adaptToDomain(session)
	}

	async loadOne(
		data: LoadOneSessionInput
	): Promise<LoadOneSessionResponse | undefined> {
		const session = await prisma.session.findFirst({
			where: {
				userId: data.userId
			}
		})

		return session ? {
			token: session.token,
			userId: session.userId,
		} : undefined
	}
}