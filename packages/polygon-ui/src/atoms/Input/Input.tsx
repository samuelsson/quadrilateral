import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, variables } from '../../styles';

export const inputPropTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

type InputProps = PropTypes.InferProps<typeof inputPropTypes>;

const Input: React.FC<InputProps> = styled.input<InputProps>`
  height: 48px;
  padding: 0 ${variables.borderRadius};
  border-radius: ${variables.borderRadius};
  border: ${(props): string =>
    props.error ? `2px solid ${colors.red}` : 'none'};
  box-sizing: border-box;
  background-color: ${colors.gray[100]};
  box-shadow: 0 1px 1px ${colors.gray[300]};
  color: ${colors.gray[800]};
  font-size: 1rem;

  transition-property: box-shadow;
  transition-timing-function: linear;
  transition-duration: 0.2s;

  &:focus,
  &:active {
    box-shadow: 0 2px 2px ${colors.gray[300]};
  }
`;

Input.propTypes = inputPropTypes;
Input.defaultProps = {
  disabled: false,
  error: false,
  placeholder: '',
};

export default Input;
