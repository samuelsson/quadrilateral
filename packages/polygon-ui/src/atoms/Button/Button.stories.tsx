import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { boolean } from '@storybook/addon-knobs';

import Button, { appearance } from './Button';

const ButtonContainer = styled.div`
  button:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

storiesOf('Button', module)
  .addDecorator(storyFn => <ButtonContainer>{storyFn()}</ButtonContainer>)
  .add(
    'Default',
    (): JSX.Element => (
      <>
        {appearance.map(button => (
          <Button
            key={button}
            name={button}
            appearance={button}
            disabled={boolean('Disabled', false)}
            bare={boolean('Bare', false)}
          >
            {button.toUpperCase()}
          </Button>
        ))}
      </>
    )
  );
