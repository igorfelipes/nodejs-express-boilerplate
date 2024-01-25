import { UserResponse } from '../user/types'

export type LoadOneSessionInput = {
  userId: string;
}
export type LoadOneSessionResponse = {
	token: string;
	userId: string;
}

export type SessionCreate = {
  email: string;
  password: string;
};

export type SessionResponse = {
  token: string;
  user: UserResponse
}
