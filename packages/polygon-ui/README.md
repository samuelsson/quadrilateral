# polygon-ui

React component library for Rektangel

## Installation

First we need to make sure we have all peer dependencies (like React) installed:

```shell
npx install-peerdeps --dev @rektangel/polygon-ui
```

Then we install the actual package with:

```shell
yarn add --dev @rektangel/polygon-ui
```

## Usage

To be able to use all the components in your React application there are only to two things you need to ensure first.

* Import `colors.css` to load all css variables used by the components
* Add `data-theme="light"` to a higher ordered, wrapping element (preferably the body tag)

After that you can use the components just as you are used to.

```javascript
import React from 'react';
import '@rektangel/polygon-ui/dist/styles/colors.css'
import { Button, H1 } from '@rektangel/polygon-ui';

const MyApp = () => (
  <div data-theme="light">
    <H1>Hello</H1>
    <Button>Clicky clicky</Button>
  </div>
);

export default MyApp;
```

### Theming

By changing the wrapping `data-theme` to another theme will use different css variables. You can currently use `light` or `dark` theme. You can toggle this dynamically and the components will render correctly in the browser.

There is also a global style included in the package which is supposed to be used in conjunction with the components. Just add `import '@rektangel/polygon-ui/dist/styles/global.css'` in the same place as the `colors.css`.
