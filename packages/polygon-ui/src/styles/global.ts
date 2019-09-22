import { createGlobalStyle } from 'styled-components';
import { Theme } from './themes';

type GlobalStyleProps = {
  theme: Theme;
};

export default createGlobalStyle<GlobalStyleProps>`
    body {
      background-color: ${({ theme }): string => theme.base.backgroundColor};
      color: ${({ theme }): string => theme.base.color};
      font-family: sans-serif;
    }
`;
