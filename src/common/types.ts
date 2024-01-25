export type PageParams = {
  page: number;
  limit: number;
  // orderBy?: "asc" | "desc";
};

export interface PaginationMeta {
  meta: {
    totalPages?: number;
    page: number;
    limit: number;
    search: Record<string, any>;
    totalItems?: number;
  };
}

export enum PeriodEnum {
  TODAY = "today",
  LAST_WEEK = "lastWeek",
  LAST_MONTH = "lastMonth",
}
