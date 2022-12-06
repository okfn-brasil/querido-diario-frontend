export interface Icon {
  file: string;
  height: number;
  width: number;
  to?: string;
  target?: string;
  isPng?: boolean;
  xs?: {
    height: number;
    width: number;
  }
}

export interface Sizeable {
  height: number;
  width: number;
}

export type IconType = { file: string } & Sizeable;