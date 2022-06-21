import { Field, ID, ObjectType } from "@nestjs/graphql";
import { SchemaLead } from "Api/leads/schemas/schema.lead";

export namespace SchemaCompany {
  @ObjectType({ description: "Company of the lead" })
  export class Company {
    @Field(() => ID)
    id: string;

    @Field(() => [SchemaLead.Lead])
    employees: SchemaLead.Lead[];
  }
}
