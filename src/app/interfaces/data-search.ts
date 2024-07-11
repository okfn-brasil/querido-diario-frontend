export interface Aggregate {
  territory_id: string;
  url_zip: string;
  year: number;
  last_updated: string;
  hash_info: string;
  file_size: string;
  created_at: string;
}

export interface ResponseDataSearch {
  state_code: string;
  territory_id: string;
  aggregates: Aggregate[];
}

export interface DataSearchResults {
  results: ResponseDataSearch[];
  error?: Error
}

export interface DataSearchQuery {
  territory_id?: string;
  state_code: string;
  sort_by?: string;
}
