# polygon-ui

React component library for Quadrilateral

## Installation

**This theme is not published anymore but I'll keep the old installation process her for now.**

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

* Add `data-theme="light"` to a higher ordered, wrapping element (preferably the body tag)

After that you can use the components just as you are used to.

```javascript
import React from 'react';
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

There is also a global style included in the package which is supposed to be used in conjunction with the components. Add `import '@rektangel/polygon-ui/dist/styles/global.css'` in a wrapping component.

If you want to use the colors or variables in your own design/components they are included as scss variables in `@rektangel/polygon-ui/dist/styles/colors.scss` / `[...]/variables.scss`. **Note that these are scss files that probably need to be compiled if used in your project.**

## Development

### Styles

Everything matching `src/styles/*.scss` will be compiled to css and copied to `/dist/styles`, to be used directly in the application. Files under `src/styles/abstracts` will **not** be compiled, the folder is just copied to `dist/styles`.
