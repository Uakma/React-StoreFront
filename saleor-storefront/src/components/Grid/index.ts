export type MarginHelpers = {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
};

export type PaddingHelpers = {
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
};

export const getStylesFromMargins = (
  mt?: number,
  mr?: number,
  mb?: number,
  ml?: number
) => {
  return {
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
  };
};

export const getStylesFromPaddings = (
  pt?: number,
  pr?: number,
  pb?: number,
  pl?: number
) => {
  return {
    paddingTop: pt,
    paddingRight: pr,
    paddingBottom: pb,
    paddingLeft: pl,
  };
};

export * from "./Grid";
export * from "./Row";
export * from "./Col";
