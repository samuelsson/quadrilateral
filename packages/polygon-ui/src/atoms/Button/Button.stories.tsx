import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { boolean } from '@storybook/addon-knobs';

import Button from './Button';

const ButtonContainer = styled.div`
  button:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const buttonStyles = ['primary', 'secondary', 'success', 'danger'];

storiesOf('Button', module)
  .addDecorator(storyFn => <ButtonContainer>{storyFn()}</ButtonContainer>)
  .add(
    'Default',
    (): JSX.Element => (
      <>
        {buttonStyles.map(button => (
          <Button
            name={button}
            appearance={button}
            disabled={boolean('Disabled', false)}
          >
            {button.toUpperCase()}
          </Button>
        ))}
      </>
    )
  )
  .add(
    'Bare',
    (): JSX.Element => (
      <>
        {buttonStyles.map(button => (
          <Button
            name={button}
            appearance={button}
            disabled={boolean('Disabled', false)}
            bare
          >
            {button.toUpperCase()}
          </Button>
        ))}
      </>
    )
  );
