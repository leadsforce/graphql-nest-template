export namespace StructCursor {
  export interface Entity<T> {
    items: T[];
    paginationID: string;
    page: number;
  }
}
