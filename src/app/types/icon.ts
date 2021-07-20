interface Sizeable {
  height: number;
  width: number;
}

export type Icon = { file: string } & Sizeable;

const square = (size: number) : Sizeable => {
  return {
    height: size,
    width: size,
  }
}