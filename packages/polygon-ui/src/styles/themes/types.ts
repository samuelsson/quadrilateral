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

export interface Input {
  background: string;
  boxShadow: string;
  borderColor: string;
}

export default interface Theme {
  base: Base;
  button: Button;
  input: Input;
}
