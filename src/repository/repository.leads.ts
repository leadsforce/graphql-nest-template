export namespace RepositoryLeads {
  export interface ShortEntity {
    uid: string;
    job_title: string;
    company_id: string;
  }
  export interface Entity extends ShortEntity {
    somefield: string;
    description?: string;
    company_employees: ShortEntity[];
  }

  export async function getOne(opts: { uid: string }): Promise<Entity | null> {
    if (!opts.uid) {
      return null;
    }
    return {
      uid: opts.uid,
      job_title: "my job!",
      company_id: "my company id!",
      company_employees: [],
      description: "some random description!",
      somefield: "what is this field?",
    };
  }
}
