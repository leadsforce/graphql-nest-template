import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

export namespace SchemaCursor {
  export function Generate<U, T extends new (...args: unknown[]) => unknown>(obj: T) {
    @ObjectType({ isAbstract: true })
    abstract class Cursor<T> {
      constructor(self: Cursor<T>) {
        Object.assign(this, self);
      }

      @Field(() => [obj])
      items: T[];

      @Field(() => ID)
      paginationID: string;

      @Field(() => Int)
      page: number;
    }
    return Cursor<U>;
  }
}
