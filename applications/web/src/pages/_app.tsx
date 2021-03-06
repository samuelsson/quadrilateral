import React from 'react';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import 'normalize.css';
import '@samuelsson/polygon-ui/dist/styles/global.css';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <Provider session={pageProps.session}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
