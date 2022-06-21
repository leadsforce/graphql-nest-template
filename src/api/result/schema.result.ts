import { createUnionType, Field, ObjectType } from "@nestjs/graphql";

export namespace SchemaResult {
  export function Union<T extends new (...args: unknown[]) => unknown>(
    obj: T,
    name = obj.name
  ) {
    return createUnionType({
      name: `Result${name}`,
      types: () => [obj, Err] as const,
    });
  }
  export type Async<Data> = Promise<Data | Err>;

  @ObjectType()
  export class Err {
    @Field(() => [ErrBody])
    err: ErrBody[];

    constructor(errors: ErrBody[]) {
      this.err = errors;
    }
  }

  @ObjectType()
  class ErrBody {
    @Field({ nullable: true })
    field?: string;
    @Field()
    msg: string;
  }
}
