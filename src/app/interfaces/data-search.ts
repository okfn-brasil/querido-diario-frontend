export interface DataSearch {
  territory_id: string;
  url_zip: string;
  year: number;
  last_update: string;
  hash_info: string;
  file_size: string;
}

export interface ResponseDataSearch{
  url_zip: string;
  year:number;
  file_size: string;
}