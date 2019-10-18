import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { darken } from 'polished';
import { colors, variables } from '../../styles';
import { Theme } from '../../styles/themes';

export const type = ['button', 'submit', 'reset'];
export const appearance = ['primary', 'secondary', 'success', 'danger'];

export const buttonPropTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(appearance),
  type: PropTypes.oneOf(type),
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
};

type ButtonProps = PropTypes.InferProps<typeof buttonPropTypes> & {
  theme?: Theme;
};

interface BaseStyle {
  foreground: string;
  background: string;
  bare?: boolean;
}

const baseStyle = ({
  foreground,
  background,
  bare,
}: BaseStyle): FlattenSimpleInterpolation => css`
  height: 48px;
  border: none;
  padding: 0 2rem;
  border-radius: ${variables.borderRadius};
  box-shadow: ${!bare && `0 2px 8px ${colors.gray[300]}`};
  background-color: ${bare ? 'transparent' : background};
  color: ${bare ? background : foreground};
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  transition-property: background, border, color, box-shadow;
  transition-timing-function: linear;
  transition-duration: 0.2s;

  &:hover:not(:disabled),
  &:focus:not(:disabled),
  &:active:not(:disabled) {
    cursor: pointer;
    background-color: ${darken(0.15, background)};
    box-shadow: 0 2px 10px ${colors.gray[400]};
    color: ${foreground};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    box-shadow: none;
  }
`;

const Button: React.FC<ButtonProps> = styled.button<ButtonProps>`
  ${({
    theme,
    appearance: buttonAppearance,
    bare,
  }): FlattenSimpleInterpolation => {
    const { white, red, green, blue } = colors;

    switch (buttonAppearance) {
      case 'secondary':
        return baseStyle({
          foreground: white,
          background: blue,
          bare: !!bare,
        });
      case 'success':
        return baseStyle({
          foreground: white,
          background: green,
          bare: !!bare,
        });
      case 'danger':
        return baseStyle({
          foreground: white,
          background: red,
          bare: !!bare,
        });
      default:
        return baseStyle({
          foreground: theme.button.primary.foreground,
          background: theme.button.primary.background,
          bare: !!bare,
        });
    }
  }};
`;

Button.propTypes = buttonPropTypes;
Button.defaultProps = {
  type: 'button',
  appearance: 'primary',
  bare: false,
  disabled: false,
};

export default Button;
