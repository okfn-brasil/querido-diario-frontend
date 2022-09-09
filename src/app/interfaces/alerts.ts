
export interface SubmitAlertForm {
  query_string: string;
  email?: string;
  territory_id?: string;
  sub_themes?: string[];
  gov_entities?: string[];
}

export interface AlertModel {
  created_at: string;
  edited_at: string;
  email?: string;
  gov_entities?: string[];
  id: string;
  query_string: string;
  sub_themes?: string[];
  territory_id?: string;
  user: string;
}

export interface AlertsList {
  count: number;
  next: number;
  previous: number;
  results: AlertModel[];
}