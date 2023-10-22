import { css, styled } from 'styled-components';
import { RelativeDisplacement, Size } from '@/_utils/CommonCssAttributes';
import React from 'react';

type ButtonStyles = 'outlined' | 'filled'
type ButtonProps = RelativeDisplacement & Size & {
  text: string,
  variant?: ButtonStyles,
  color?: string,
}
const StyledButton = styled.button<{
  $variant: ButtonStyles,
  color: string,
  $margin?: string
}>`
  --_color: ${({ $variant, color }) => $variant === 'outlined' ? color : 'white'};
  --_bgColor: ${({ $variant, color }) => $variant === 'outlined' ? 'transparent' : color};
  display: inline-block;
  font-family: Merriweather, Arial, serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;

  width: 160px;
  height: 44px;
  padding: 11px 0;
  cursor: pointer;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ color }) => color};
  color: var(--_color);
  background-color: var(--_bgColor);
  
  ${({ $margin }) => $margin && css`margin: ${$margin}`};

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.85);
  }

  & + & {
    margin-left: 10px;
  }
`;
export default function Button({ text, variant, color, margin }: ButtonProps) {
  return (
    <>
      <StyledButton
        type='button'
        $margin={margin}
        $variant={variant ?? 'outlined'}
        color={color ?? 'white'}
      >
        {text}
      </StyledButton>
    </>
  );
}