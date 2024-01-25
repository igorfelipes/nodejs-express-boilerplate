import { LoadUserByIdResponse } from '../../app/user/types'
import { UserRepository } from '../../data/contracts/userRepository'
import { User } from '../../domain/entities/user'
import { prisma } from "../../database/client";


export class UserMysqlRepository implements UserRepository {

	adaptToDomain(data: any): User {
		const { id, name, email } = data
		return new User({ id, name, email })
	}

	async findMany(): Promise<User[] | []> {
		const data = await prisma.user.findMany()
		
		return data? data.map(this.adaptToDomain) : []
	}

	async loadById(id: string): Promise<LoadUserByIdResponse | undefined> {
		const user = await prisma.user.findFirst({
			where: { id }
		})
		return user ? this.adaptToDomain(user) : undefined
	}

	async loadByEmail(email: string): Promise<User | undefined> {
		const user = await prisma.user.findUnique({ where: { email }})
		return user ? {
			...this.adaptToDomain(user),
			password: user.password
		} : undefined
	}

	async create(data: User): Promise<User> {
		const response = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password!,
			}
		})
		return this.adaptToDomain(response)
	}

	async update(id: string, data: Partial<User>): Promise<User | undefined> {
		// TODO: implement this method
		return undefined
	}

	async delete(id: string): Promise<boolean> {
		// TODO: implement this method
		return true
	}

}