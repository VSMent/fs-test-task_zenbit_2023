import {default as NextLink}  from 'next/link';
import { styled } from 'styled-components';

const StyledLink = styled(NextLink)`
  margin: 50px;
`

type LinkProps = {
  text: string
  href: string
}
export default function Link({ text, href }: LinkProps) {
  return <StyledLink href={href}>{text}</StyledLink>;
}