# polygon-ui

React component library for Rektangel

## Installation

First we need to make sure we have all peer dependencies installed:

```shell
npx install-peerdeps --dev @rektangel/polygon-ui
```

Then we install the actual package with:

```shell
yarn add --dev @rektangel/polygon-ui
```

## Usage

Polygon-UI is using different themes, a dark and a light version, which means you need to wrap your app in a `ThemeProvider`.

```javascript
import React from 'react';
import { Button } from '@rektangel/polygon-ui';

const CoolPage = (): JSX.Element => (
  <>
    My button
    <Button />
  </>
);

export default CoolPage;
```
