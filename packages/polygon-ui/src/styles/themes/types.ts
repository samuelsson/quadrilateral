export interface Base {
  backgroundColor: string;
  color: string;
}

export interface Button {
  [key: string]: {
    foreground: string;
    background: string;
  };
}

export default interface Theme {
  base: Base;
  button: Button;
}
