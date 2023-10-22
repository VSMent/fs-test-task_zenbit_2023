'use client';
import { styled } from 'styled-components';

const Span = styled.span`
  font-family: Merriweather, Arial, serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
  user-select: none;
`;
export default function Logo() {
  return <Span>My Logo</Span>;
}