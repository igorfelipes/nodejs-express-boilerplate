import { LoadUserByIdResponse } from '../../app/user/types'
import { User } from "../../domain/entities/user";

export interface UserRepository {
  findMany: () => Promise<User[] | []>;
  loadById: (id: string) => Promise<User | undefined>;
  loadByEmail: (email: string) => Promise<User | undefined>;
  create: (data: User) => Promise<User>;
  update: (id: string, data: Partial<User>) => Promise<User | undefined>;
  delete: (id: string) => Promise<boolean>;
}
