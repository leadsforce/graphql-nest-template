import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { ModuleMain } from "Api/api.main";
import { ConfigApp } from "Config/config.app";
import { ConfigServer } from "Config/config.server";

export async function createServer() {
  const server = await NestFactory.create<NestFastifyApplication>(
    ModuleMain,
    new FastifyAdapter(),
    { logger: ConfigApp.LOGLEVEL }
  );
  await server.listen(ConfigServer.PORT, ConfigServer.HOST);
}

createServer().catch((err) => {
  console.error(err);
  process.exit(1);
});
