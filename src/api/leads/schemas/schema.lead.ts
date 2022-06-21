import { Field, ID, ObjectType } from "@nestjs/graphql";
import { SchemaCompany } from "Api/companies/schemas/schema.company";
import { SchemaCursor } from "Api/cursor/schema.cursor";
import { SchemaJob } from "Api/leads/schemas/schema.job";
import { StructLead } from "Domain/leads/struct.leads";

export namespace SchemaLead {
  export function fromStruct(lead: StructLead.Entity): Lead {
    return new Lead({
      id: lead.id,
      description: lead.description,
      job: lead.job,
      company: {
        id: lead.job.company.id,
        employees: lead.job.company.employees,
      },
    });
  }

  @ObjectType({ description: "Lead with contacts" })
  export class Lead {
    constructor(self: Lead) {
      Object.assign(this, self);
    }

    @Field(() => ID)
    id: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => SchemaJob.Job)
    job: SchemaJob.Job;

    @Field(() => SchemaCompany.Company, { nullable: true })
    company?: SchemaCompany.Company;
  }

  @ObjectType()
  export class LeadCursor extends SchemaCursor.Generate(Lead) {}
}
