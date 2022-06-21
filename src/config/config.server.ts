import { cleanEnv, str } from "envalid";

export namespace ConfigServer {
  const env = cleanEnv(process.env, {
    PORT: str(),
    HOST: str({ default: "0.0.0.0" }),
  });

  export const PORT = env.PORT;
  export const HOST = env.HOST;
}
