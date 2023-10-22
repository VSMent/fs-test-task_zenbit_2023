'use client';
import { css, styled } from 'styled-components';
import { Size } from '@/_utils/CommonCssAttributes';

const StyledSection = styled.section<{ $image?: string, height?: string }>`
  height: ${({ height }) => height || '1024px'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ $image }) => $image && css`position: relative;
    z-index: 1;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      display: inline-block;
      width: 100%;
      height: 100%;
      content: '';
      background-image: url("${$image}");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      opacity: 0.6;
    }`
  }
`;

type SectionProps = Size & {
  children?: React.ReactNode,
  image?: string,
}
export default function Section({ children, image, height }: SectionProps) {
  return (
    <StyledSection $image={image} height={height}>
      {children}
    </StyledSection>
  );
}