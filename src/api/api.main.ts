import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { ApiCompanies } from "Api/companies/api.companies";
import { ApiLeads } from "Api/leads/api.leads";
import { ConfigApp } from "Config/config.app";

@Module({
  imports: [
    ApiLeads,
    ApiCompanies,
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: ConfigApp.IS_DEV,
      autoSchemaFile: true,
      queryDepth: 7,
    }),
  ],
})
export class ModuleMain {}
