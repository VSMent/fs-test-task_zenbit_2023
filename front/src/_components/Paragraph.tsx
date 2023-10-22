import { css, styled } from 'styled-components';
import { Size } from '@/_utils/CommonCssAttributes';

type ParagraphProps = Size & {
  text: string
}

const P = styled.p<{ $width?: string }>`
  font-family: Lato, Arial, serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: center;
  ${({ $width }) => $width && css`width: ${$width}`}
`;

export default function Paragraph({ text, width }: ParagraphProps) {
  return (
    <P $width={width}>{text}</P>
  );
}