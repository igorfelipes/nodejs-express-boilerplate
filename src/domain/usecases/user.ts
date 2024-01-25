import { LoadAllUserResponse, LoadUserByIdResponse, UserCreate, UserResponse } from '../../app/user/types'

export interface LoadAllUser {
  loadAll: () => Promise<LoadAllUserResponse | []>;
}

export interface LoadUserById {
  loadById: (id: string) => Promise<LoadUserByIdResponse | undefined>;
}

export interface CreateUser {
  create: (data: UserCreate) => Promise<UserResponse>;
}

export interface UpdateUser {
  update: (
    id: string,
    data: Partial<UserCreate>
  ) => Promise<UserResponse | undefined>;
}

export interface DeleteUser {
  delete: (id: string) => Promise<boolean>;
}

export interface AuthenticateUser {
  authenticate: (email: string, password: string) => Promise<UserResponse>;
}

export interface LoadUserByEmail {
  loadByEmail: (email: string) => Promise<UserResponse | undefined>;
}

