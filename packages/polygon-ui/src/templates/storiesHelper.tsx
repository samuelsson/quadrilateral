import * as React from 'react';

export const Header = (
  <header
    style={{ gridArea: 'header', backgroundColor: '#bbb', padding: '1rem' }}
  >
    header
  </header>
);

export const Footer = (
  <footer
    style={{ gridArea: 'footer', backgroundColor: '#bbb', padding: '1rem' }}
  >
    footer
  </footer>
);

export const Content = (
  <div
    style={{
      backgroundColor: '#ccc',
      height: '100%',
      boxSizing: 'border-box',
    }}
  />
);
