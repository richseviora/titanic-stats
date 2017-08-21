export interface IResponse<T> {
  status: string;
  meta: IMetadata;
  data: T;
}

export interface IMetadata {
  count?: number;
  page_total?: number;
  total?: number;
  limit?: number;
  page?: number;
}
