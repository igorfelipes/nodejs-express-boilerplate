declare namespace NodeJS {
  export interface ProcessEnv {
    APP_ENV: "development" | "production" | "staging";
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    PGHOST: string;
    PGPASSWORD: string;
    PGPORT: string;
    PGUSER: string;
    PGDATABASE: string;
    REDISHOST: string;
    REDISPORT: string;
    REDISUSER: string;
    REDISPASSWORD: string;
  }
}
