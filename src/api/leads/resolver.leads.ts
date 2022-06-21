import { Args, Query, Resolver } from "@nestjs/graphql";
import { SchemaLead } from "Api/leads/schemas/schema.lead";
import { SchemaResult } from "Api/result/schema.result";
import { ServiceLeads } from "Domain/leads/service.leads";

const ResultLead = SchemaResult.Union(SchemaLead.Lead);
const ResultLeadList = SchemaResult.Union(SchemaLead.LeadCursor);

@Resolver()
export class ResolverLeads {
  @Query(() => ResultLead)
  async Lead(@Args("id") id: string): SchemaResult.Async<SchemaLead.Lead> {
    const errOrLead = await ServiceLeads.getOne({ id });
    if (!errOrLead.ok()) {
      return new SchemaResult.Err([
        { field: "id", msg: `Lead with id ${id} not found` },
      ]);
    }
    return SchemaLead.fromStruct(errOrLead.data);
  }

  @Query(() => ResultLeadList)
  async LeadList(
    @Args("paginationID") paginationID: string,
    @Args("page") page: number
  ): SchemaResult.Async<SchemaLead.LeadCursor> {
    const errOrLead = await ServiceLeads.getList({ page, paginationID });
    if (!errOrLead.ok()) {
      return new SchemaResult.Err([errOrLead.msg]);
    }
    const items = errOrLead.data.items.map(SchemaLead.fromStruct);

    return new SchemaLead.LeadCursor({ paginationID, page, items });
  }
}
