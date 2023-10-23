import { default as NextLink } from 'next/link';
import { css, styled } from 'styled-components';

const StyledLink = styled(NextLink)<{ $textAlign?: string }>`
  font-family: Lato, Arial, serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0;
  ${({ $textAlign }) => $textAlign && css`text-align: ${$textAlign}`};
  color: #B29F7E;

`;

type LinkProps = {
  text: string
  href: string
  textAlign?: string
}
export default function Link({ text, href, textAlign }: LinkProps) {
  return <StyledLink href={href} $textAlign={textAlign}>{text}</StyledLink>;
}