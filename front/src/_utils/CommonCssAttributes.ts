export interface Size {
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

export interface RelativeDisplacement {
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export interface Positioning {
  position?: string,
  top?: string,
  bottom?: string,
  left?: string,
  right?: string,
}

export interface Color {
  color?: string,
  bgColor?: string
}

type AllAttributes =
  Size
  & RelativeDisplacement
  & Positioning
  & Color

export default AllAttributes;