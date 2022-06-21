import { Module } from "@nestjs/common";
import { ResolverLeads } from "Api/leads/resolver.leads";

@Module({ imports: [], providers: [ResolverLeads] })
export class ApiLeads {}
