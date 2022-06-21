import { Field, ObjectType } from "@nestjs/graphql";

export namespace SchemaJob {
  @ObjectType({ description: "Job of the lead" })
  export class Job {
    @Field()
    rawTitle: string;
  }
}
