export interface DataSearch {
  territory_id: string;
  url_zip: string;
  year: number;
  last_update: string;
  hash_info: string;
  file_size: string;
  downloads: DownloadData[]
}

export interface ResponseDataSearch{
  total_dataSearch: number;
  datas: DataSearch[];
  error?: boolean;
}

export interface DataSearchQuery {
  territory_id?: string | string[];
  year?:string;
}

export enum DownloadsLabelsData {
  URL_ZIP = 'Baixar XML'
}

export interface DownloadData {
  value: string;
  viewValue: DownloadsLabelsData,
}