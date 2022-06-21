import { LogLevel } from "@nestjs/common";
import { cleanEnv, str } from "envalid";

export namespace ConfigApp {
  const env = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ["production", "development"] }),
  });

  export const IS_DEV = env.isDevelopment;
  export const IS_PROD = env.isProduction;
  export const LOGLEVEL: LogLevel[] = IS_DEV
    ? ["verbose", "warn", "debug", "log", "error"]
    : ["log", "error"];
}
