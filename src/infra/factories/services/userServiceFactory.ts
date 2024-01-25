import { UserService } from "../../../app/user/service";
import { makeUserMysqlRepository } from "../repos";

export const makeUserService = (): UserService => {
  const repository = makeUserMysqlRepository();
  return new UserService(repository);
};
