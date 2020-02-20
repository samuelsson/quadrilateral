import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './Button';

const ButtonContainer = styled.div`
  button:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const appearance = ['primary', 'secondary', 'success', 'danger'];

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
            onClick={action('button-click')}
            disabled={boolean('Disabled', false)}
            bare={boolean('Bare', false)}
          >
            {button.toUpperCase()}
          </Button>
        ))}
      </>
    )
  );
