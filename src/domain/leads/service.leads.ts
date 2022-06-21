import { StructCursor } from "Domain/cursor/struct.cursor";
import { StructLead } from "Domain/leads/struct.leads";
import { DefaultError } from "Domain/result/struct.err";
import { Result } from "Domain/result/struct.result";
import { RepositoryLeads } from "Repo/repository.leads";

export namespace ServiceLeads {
  export async function getOne(opts: {
    id: string;
  }): Result.AsyncEither<StructLead.Entity, DefaultError> {
    const foundLead = await RepositoryLeads.getOne({ uid: opts.id });
    if (!foundLead) {
      return Result.err(DefaultError.new(`Lead with id ${opts.id} not found`));
    }
    return Result.ok(StructLead.fromRepo(foundLead));
  }

  export async function getList(opts: {
    paginationID: string;
    page: number;
  }): Result.AsyncEither<StructCursor.Entity<StructLead.Entity>, DefaultError> {
    if (opts.page > 1) {
      return Result.err(DefaultError.new(`Cursor is invalid. Max page is 1`));
    }
    const foundLead = await RepositoryLeads.getOne({ uid: "some id" });
    return Result.ok({
      items: [foundLead].map(StructLead.fromRepo),
      page: opts.page,
      paginationID: opts.paginationID,
    });
  }
}
