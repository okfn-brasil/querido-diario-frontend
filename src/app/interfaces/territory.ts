export interface Territory {
  territory_id: string;
  territory_name: string;
  state_code: string;
  publication_urls: string[];
  level: string;
  territory_label: string;
}

export interface TerritoryQuery {
  name: string;
}