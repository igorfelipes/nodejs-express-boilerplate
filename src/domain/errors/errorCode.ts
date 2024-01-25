import { BaseError } from "./base/baseError";
import BusinessError from "./businessError";
import IntegrationError from "./integrationError";

export class ErrorCode {
  public static AUTH = {
    GENERIC: {
      code: "UC-MIDDLEWARE-AUTH",
      message: "Authentication error",
    },
    NOT_LOGGED: new BusinessError({
      code: "UC-MIDDLEWARE-AUTH-0001",
      message: "Usuário não está logado",
      details: {},
    }),
    NOT_AUTHORIZED: new BusinessError({
      code: "UC-MIDDLEWARE-AUTH-0002",
      message: "Não autorizado",
      details: {},
    }),
    TOKEN_EXPIRED: new BusinessError({
      code: "UC-MIDDLEWARE-AUTH-0003",
      message: "Token expirado",
      details: {},
    }),
  };

  public static SESSION = {
    NOT_FOUND: new BusinessError({
      code: "UC-SESSION-0001",
      message: `Sessão não encontrada`,
      details: {},
    }),
  };

  public static USER = {
    NOT_FOUND: (reference: string) =>
      new BusinessError({
        code: "UC-USER-0001",
        message: `Usuário não encontrado`,
        details: {},
      }),
    INVALID_EMAIL_OR_PASSWORD: new BusinessError({
      code: "UC-USER-0002",
      message: `Email ou senha inválidos`,
      details: {},
    }),
  };

  public static USER_CREATE = {
    EMAIL_ALREADY_IN_USE: new BusinessError({
      code: "UC-USER-CREATE-0001",
      message: `Email já está em uso`,
      details: {},
    }),
    ROLE_NOT_FOUND: (reference: string) =>
      new BusinessError({
        code: "UC-USER-CREATE-0002",
        message: `Role não encontrada`,
        details: {
          reference,
        },
      }),
  };

  public static CREATE_BID = {
    CAR_NOT_FOUND: new BusinessError({
      code: "UC-BID-CREATE-0001",
      message: `Carro não encontrado`,
      details: {},
    }),
    USER_NOT_FOUND: new BusinessError({
      code: "UC-BID-CREATE-0002",
      message: `Usuário não encontrado`,
      details: {},
    }),
    INVALID_AMOUNT: new BusinessError({
      code: "UC-BID-CREATE-0003",
      message: `Valor inválido`,
      details: {
        reference: "amount",
        detail: "O valor deve ser maior que o valor inicial do carro",
      },
    }),
  }

  public static CLOSE_AUCTION = {
    CAR_NOT_FOUND: new BusinessError({
      code: "UC-CLOSE-AUCTION-CAR-0001",
      message: `Carro não encontrado`,
      details: {},
    }),
    BID_NOT_FOUND: new BusinessError({
      code: "UC-CLOSE-AUCTION-CAR-0002",
      message: `Lance não encontrado`,
      details: {
        reference: "amount",
        detail: "O carro não possui lances",
      },
    }),
    AUCTION_ALREADY_CLOSED: new BusinessError({
      code: "UC-CLOSE-AUCTION-CAR-0003",
      message: `Leilão já está fechado`,
      details: {},
    })
  }

}