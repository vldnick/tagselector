import React from 'react';
import styled from 'styled-components';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...inputProps }, ref) => <StyledInput {...inputProps} ref={ref} />, // eslint-disable-line react/jsx-props-no-spreading
);

const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;
