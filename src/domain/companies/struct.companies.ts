import { StructLead } from "Domain/leads/struct.leads";

export namespace Company {
  export interface Entity {
    id: string;
    employees: StructLead.ShortEntity[];
  }
}
