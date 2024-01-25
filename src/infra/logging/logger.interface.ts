export interface Logger {
  info(message: string, metadata?: Record<string, any>): void;
  error(error: Error, metadata?: Record<string, any>): void;
  custom(eventName: string, message?: string, metadata?: Record<string, any>): void;
}