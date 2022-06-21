import { Company } from "Domain/companies/struct.companies";
import { RepositoryLeads } from "Repo/repository.leads";

export namespace StructLead {
  export function fromRepo(lead: RepositoryLeads.Entity): Entity {
    return {
      id: lead.uid,
      job: {
        rawTitle: lead.job_title,
        company: {
          id: lead.company_id,
          employees: lead.company_employees.map((employee) => ({
            id: employee.uid,
            job: { rawTitle: employee.job_title },
          })),
        },
      },
    };
  }

  export interface ShortEntity {
    id: string;
    description?: string;
    job: ShortJob;
  }
  export interface Entity extends ShortEntity {
    job: Job;
  }

  export interface ShortJob {
    rawTitle: string;
  }
  export interface Job extends ShortJob {
    company: Company.Entity;
  }
}
