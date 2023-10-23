import { css, styled } from 'styled-components';
import { Color, Size } from '@/_utils/CommonCssAttributes';
import { ChangeEvent, useId } from 'react';

const StyledInput = styled.input<{
  $color?: string,
  $bgColor?: string
  $width?: string
  $height?: string
}>`
  font-family: Lato, Arial, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;

  border: 2px solid #E0E0E0;
  border-radius: 5px;
  padding: 14px 20px 12px 20px;

  ${({ $width }) => $width && css`width: ${$width}`};
  ${({ $height }) => $height && css`height: ${$height}`};
  ${({ $color }) => $color && css`color: ${$color}`};
  ${({ $bgColor }) => $bgColor && css`background-color: ${$bgColor}`};

  //top: 23px
  //gap: 64px

  &:blank {
    opacity: 0.5;
  }

`;
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-family: Merriweather, Arial, serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;

`;

type InputProps = Color & Size & {
  type: 'text' | 'password' | 'email'
  placeholder?: string
  name?: string
  required?: boolean
  withLabel?: { text: string }
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
export default function Input({
  type,
  placeholder,
  name,
  required,
  withLabel,
  color,
  bgColor,
  width,
  height,
  onChange,
}: InputProps) {
  const inputId = useId();

  return (
    <div>
      {withLabel &&
        <StyledLabel htmlFor={inputId}>{withLabel.text}</StyledLabel>
      }
      <StyledInput
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        $width={width}
        $height={height}
        $color={color}
        $bgColor={bgColor}
        onChange={onChange}
      />
    </div>
  );
}