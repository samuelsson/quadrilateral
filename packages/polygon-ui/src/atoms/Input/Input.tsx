import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles';
import { Theme } from '../../styles/themes';

export const inputPropTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

type InputProps = PropTypes.InferProps<typeof inputPropTypes> & {
  theme?: Theme;
};

const Input: React.FC<InputProps> = styled.input<InputProps>`
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  border: 2px solid
    ${({ theme, error }): string =>
      error ? colors.red : theme.input.borderColor};
  box-sizing: border-box;
  background-color: ${({ theme }): string => theme.input.background};
  box-shadow: ${({ theme }): string => theme.input.boxShadow};
  color: inherit;
  font-size: 1rem;

  transition-property: box-shadow, border, opacity;
  transition-timing-function: linear;
  transition-duration: 0.2s;

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    border-color: ${colors.blue};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

Input.propTypes = inputPropTypes;
Input.defaultProps = {
  disabled: false,
  error: false,
  placeholder: '',
};

export default Input;
