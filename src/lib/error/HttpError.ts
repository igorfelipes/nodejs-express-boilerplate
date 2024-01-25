import { getEnv } from "../../common/env";
import { Code } from "../../constants/ResponseCodes";

export class HttpError extends Error {
  message: string;
  private status: Code;
  private rawError: any;

  constructor({
    message,
    status,
    err,
  }: {
    message: string;
    status: Code;
    err?: any;
  }) {
    super(message);
    this.message = message;
    this.status = status;
    this.rawError = err;

    if (getEnv() === "development" && err) {
      console.error(err);
    }
  }

  public getMessage(): string {
    return this.message;
  }

  public getStatus(): Code {
    return this.status;
  }

  public getRawError(): any {
    return this.rawError;
  }
}
