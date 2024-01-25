import "express";

export interface UserRequest {
  id: string;
  name: string;
  // role: {
  //   name: string;
  //   permissions: { name: string }[];
  // } | null;
}

declare module "express" {
  export interface Request {
    user?: UserRequest;
  }
}
