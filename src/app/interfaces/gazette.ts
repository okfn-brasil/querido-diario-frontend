export enum DownloadsLabels {
  TXT = 'Baixar txt',
  ORIGINAL = 'Baixar arquivo original',
}

export interface Download {
  value: string;
  viewValue: DownloadsLabels,
}

export interface Gazette {
  territory_id: string;
  date: string;
  url: string;
  territory_name: string;
  state_code: string;
  excerpts: string[];
  edition: string;
  is_extra_edition: boolean;
  txt_url?: string;
  downloads: Download[]
}

export interface Theme {
  [key: string]: boolean | null;
}

export interface GazetteQuery {
  term?: string;
  territory_id?: string | string[];
  published_since?: string;
  published_until?: string;
  sort_by?: string;
  page?: number;
}

export interface GazetteResponse {
  total_gazettes: number;
  gazettes: Gazette[];
}

export interface Pagination {
  size: number;
  offset: number;
}