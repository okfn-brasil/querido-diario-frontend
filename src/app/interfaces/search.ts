export interface SearchResult {
  text: string;
  city: string;
  updatedAt: string;
  downloadUrl: string;
  territoryId: string;
}

export interface SearchResponse {
  count: number;
  results: SearchResult[];
}

export interface LevelDescription {
  text: string;
  button?: {
    text: string;
    href: string;
  };
}

export interface Pagination {
  itemsPerPage: number;
  currentPage: number;
  totalItems?: number;
}