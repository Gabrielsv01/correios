export interface Theme {
  colors: {
    primary: string;
    secunday: string;
    secundayDark: string;
    white: string;
    black: string;
    red: string;
  };
  border: {
    radius: {
      zero: number;
      xsmall: number;
      small: number;
      regular: number;
      circle: number;
    };
    width: {
      zero: number;
      small: number;
      medium: number;
      large: number;
      huge: number;
    };
  };
  spacing: {
    zero: number;
    xxxsmall: number;
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    xxxlarge: number;
    huge: number;
    xhuge: number;
    xxhuge: number;
    xxxhuge: number;
  };
  fontSize: {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    xxxlarge: number;
    huge: number;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
    black: number;
  };
}
