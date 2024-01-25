import { UserRepository } from "../../data/contracts/userRepository";
import { ErrorCode } from "../../domain/errors/errorCode";
import {
  AuthenticateUser,
  CreateUser,
  DeleteUser,
  LoadAllUser,
  LoadUserByEmail,
  LoadUserById,
  UpdateUser,
} from "../../domain/usecases/user";
import {
  LoadAllUserResponse,
  LoadUserByIdResponse,
  UserCreate,
  UserResponse,
} from "./types";
import { comparePasswordHash, generatePasswordHash } from "./utils";

export class UserService
  implements
    LoadAllUser,
    LoadUserById,
    UpdateUser,
    DeleteUser,
    CreateUser,
    AuthenticateUser,
    LoadUserByEmail
{
  constructor(private readonly repository: UserRepository) {}

  async loadAll(): Promise<LoadAllUserResponse | []> {
    return await this.repository.findMany();
  }

  async loadById(id: string): Promise<LoadUserByIdResponse | undefined> {
    return await this.repository.loadById(id);
  }

  async create(data: UserCreate): Promise<UserResponse> {
    const userExists = await this.repository.loadByEmail(data.email);
    if (userExists) throw ErrorCode.USER_CREATE.EMAIL_ALREADY_IN_USE;

    return await this.repository.create(data);
  }

  async update(
    id: string,
    data: Partial<UserCreate>
  ): Promise<UserResponse | undefined> {
    const userExists = await this.repository.loadById(id);
    if (!userExists) throw ErrorCode.USER.NOT_FOUND("user.update");

    if (data.password) data.password = generatePasswordHash(data.password);

    return await this.repository.update(id, data);
  }

  async delete(id: string): Promise<boolean> {
    const userExists = await this.repository.loadById(id);
    if (!userExists) throw ErrorCode.USER.NOT_FOUND("user.update");

    return await this.repository.delete(id);
  }

  async loadByEmail(email: string): Promise<UserResponse | undefined> {
    const user = await this.repository.loadByEmail(email);
    if (!user) throw ErrorCode.USER.NOT_FOUND("user.update");
    delete user.password;
    return user;
  }

  async authenticate(email: string, password: string): Promise<UserResponse> {
    const user = await this.repository.loadByEmail(email);
    if (!user) throw ErrorCode.USER.INVALID_EMAIL_OR_PASSWORD;
    if (!comparePasswordHash(password, user.password!))
      throw ErrorCode.USER.INVALID_EMAIL_OR_PASSWORD;
    const { password: pass, ...rest } = user;
    
    return {
      ...rest,
    };
  }
}
