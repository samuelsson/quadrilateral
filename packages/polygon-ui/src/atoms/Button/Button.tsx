import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { darken } from 'polished';
import { colors } from '../../abstracts';

export const type = ['button', 'submit', 'reset'];
export const theme = ['primary', 'secondary', 'success', 'danger'];

export const buttonPropTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(theme),
  type: PropTypes.oneOf(type),
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
};

type ButtonProps = PropTypes.InferProps<typeof buttonPropTypes>;

interface BaseStyle {
  foreground: string;
  background: string;
  outlined?: boolean;
}

const baseStyle = ({
  foreground,
  background,
  outlined,
}: BaseStyle): FlattenSimpleInterpolation => css`
  border: ${outlined ? `solid 3px ${background}` : 'none'};
  padding: ${outlined ? 'calc(1rem - 3px) calc(2rem - 3px)' : '1rem 2rem'};
  border-radius: 4px;
  background-color: ${outlined ? 'transparent' : background};
  color: ${outlined ? background : foreground};
  font-weight: bold;
  text-decoration: none;

  transition-property: background, border, color;
  transition-timing-function: linear;
  transition-duration: 0.2s;

  &:hover:not(:disabled),
  &:focus:not(:disabled),
  &:active:not(:disabled) {
    cursor: pointer;
    background-color: ${darken(0.15, background)};
    border: ${outlined ? `solid 3px ${darken(0.15, background)}` : 'none'};
    color: ${foreground};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Button: React.FC<ButtonProps> = styled.button<ButtonProps>`
  ${(props): FlattenSimpleInterpolation => {
    const { white, red, green, blue, gray, yellow } = colors;

    switch (props.theme) {
      case 'secondary':
        return baseStyle({
          foreground: white,
          background: gray[800],
          outlined: !!props.outlined,
        });
      case 'success':
        return baseStyle({
          foreground: white,
          background: green,
          outlined: !!props.outlined,
        });
      case 'danger':
        return baseStyle({
          foreground: white,
          background: red,
          outlined: !!props.outlined,
        });
      case 'warning':
        return baseStyle({
          foreground: white,
          background: yellow,
          outlined: !!props.outlined,
        });
      default:
        return baseStyle({
          foreground: white,
          background: blue,
          outlined: !!props.outlined,
        });
    }
  }};
`;

Button.propTypes = buttonPropTypes;
Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  outlined: false,
  disabled: false,
};

export default Button;
