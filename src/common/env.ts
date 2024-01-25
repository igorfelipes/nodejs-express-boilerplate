// TODO: Add validation for env variables
export const getEnv = () => process.env.APP_ENV;
export const getJsonWebTokenSecret = () => process.env.JWT_SECRET || "secret";
export const getJsonWebTokenExpiresIn = () => process.env.JWT_EXPIRES_IN || "1h";
