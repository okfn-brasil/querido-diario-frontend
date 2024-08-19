export interface Aggregate {
  territory_id: string;
  state_code: string;
  file_path: string;
  year: string;
  last_updated: string;
  hash_info: string;
  file_size_mb: string;
}

export interface ResponseAggregate {
  state_code: string;
  territory_id: string;
  aggregates: Aggregate[];
}

export interface AggregateQuery {
  state_code: string;
  territory_id?: string;
}
