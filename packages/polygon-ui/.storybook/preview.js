import React from 'react';
import './theme-toggle';
import '../src/styles/global.css';

// Does nothing at the moment but is kept in case we want to wrap something.
const WrapperDecorator = ({ children }) => (
  <>
    {children}
  </>
);

export const decorators = [
  (Story) => <WrapperDecorator><Story/></WrapperDecorator>,
];
