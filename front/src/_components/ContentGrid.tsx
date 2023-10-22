import { css, styled } from 'styled-components';
import { Color, Positioning, RelativeDisplacement, Size } from '@/_utils/CommonCssAttributes';

const Grid = styled.section<{
  $gap?: string,
  $color?: string,
  $margin?: string,
  $width?: string,
  $template?: string
  $alignItems?: string
  $padding?: string
  $bottom?: string
  $position?: string
}>`
  display: grid;

  ${({ $template }) => $template
          ? css`grid-template: ${$template}`
          : css`grid-template: repeat(2,1fr) / repeat(2,1fr)`};
  ${({ $color }) => $color && css`color: ${$color}`};
  ${({ $margin }) => $margin && css`margin: ${$margin}`};
  ${({ $width }) => $width && css`width: ${$width}`};
  ${({ $gap }) => $gap && css`gap: ${$gap}`};
  ${({ $alignItems }) => $alignItems && css`align-items: ${$alignItems}`};
  ${({ $padding }) => $padding && css`padding: ${$padding}`};
  ${({ $bottom }) => $bottom && css`bottom: ${$bottom}`};
  ${({ $position }) => $position && css`position: ${$position}`};

`;

type SubHeadingProps = RelativeDisplacement & Size & Color & Positioning & {
  children: React.ReactNode
  gap?: string
  template?: string
  alignItems?: string
  position?: string
}
export default function ContentGrid({
  margin,
  width,
  children,
  gap,
  color,
  template,
  alignItems,
  padding,
  bottom,
  position
}: SubHeadingProps) {
  return (
    <Grid
      $margin={margin}
      $width={width}
      $template={template}
      $gap={gap}
      $alignItems={alignItems}
      $padding={padding}
      $bottom={bottom}
      $position={position}
    >
      {children}
    </Grid>
  );
}