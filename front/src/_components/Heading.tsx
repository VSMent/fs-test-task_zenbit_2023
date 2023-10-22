import { css, styled } from 'styled-components';
import { RelativeDisplacement, Size } from '@/_utils/CommonCssAttributes';

type HeadingProps = Size & RelativeDisplacement & {
  text: string
}

const H1 = styled.h1<{ $width?: string, $margin?: string }>`
  font-family: Merriweather, Arial, serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: 0;
  text-align: center;
  ${({ $width }) => $width && css`width: ${$width}`}
  ${({ $margin }) => $margin && css`margin: ${$margin}`}
`;

export default function Heading({ text, width, margin }: HeadingProps) {
  return (
    <H1 $width={width} $margin={margin}>{text}</H1>
  );
}