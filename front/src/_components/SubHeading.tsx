import { css, styled } from 'styled-components';
import { RelativeDisplacement, Size } from '@/_utils/CommonCssAttributes';

const H2 = styled.h2<{
  $color?: string,
  $margin?: string,
  $width?: string
}>`
  font-family: Merriweather, Arial, serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
  ${({ $margin }) => $margin && css`margin: ${$margin}`};
  ${({ $color }) => $color && css`color: ${$color}`};
  ${({ $width }) => $width && css`width: ${$width}`};

`;

type SubHeadingProps = RelativeDisplacement & Size & {
  text: string,
  color?: string
}
export default function SubHeading({ text, color, margin, width }: SubHeadingProps) {
  return (
    <H2 $color={color} $margin={margin} $width={width}>{text}</H2>
  );
}