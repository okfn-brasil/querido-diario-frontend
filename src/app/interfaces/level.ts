export interface LevelDescription {
  text: string;
  button?: {
    text: string;
    href: string;
  };
}

export interface Action {
  text: string;
  to: string;
  target: string;
}

export interface Level {
  icon: string;
  title: string;
  texts?: string[];
  descriptions?: string[];
  actions?: Action[];
}