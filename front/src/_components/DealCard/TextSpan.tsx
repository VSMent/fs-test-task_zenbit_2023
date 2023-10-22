import { css, styled } from 'styled-components';

const Span = styled.span<{ $title?: boolean }>`

  font-weight: 700;
  letter-spacing: 0;
  text-align: left;
  ${({ $title }) => $title
          ? css`
            font-family: Merriweather, Arial, serif;
            font-size: 20px;
            line-height: 34px;
            grid-column: 1 / span 3;
          `
          : css`font-family: Lato, Arial, serif;
            font-size: 18px;
            line-height: 22px;
          `
  }
`;

type TextSpanProps = {
  text: string,
  isTitle?: boolean
}

export default function TextSpan({ text, isTitle }: TextSpanProps) {
  return (
    <Span $title={isTitle}>{text}</Span>
  );
}