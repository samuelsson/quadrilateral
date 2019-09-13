import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Button from './Button';

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
        <Button name="a">Primary</Button>
        <Button name="b" theme="secondary">
          Secondary
        </Button>
        <Button name="b" theme="success">
          Success
        </Button>
        <Button name="c" theme="danger">
          Danger
        </Button>
      </>
    )
  )
  .add(
    'Bare',
    (): JSX.Element => (
      <>
        <Button name="a" bare>
          Primary
        </Button>
        <Button name="b" theme="secondary" bare>
          Secondary
        </Button>
        <Button name="b" theme="success" bare>
          Success
        </Button>
        <Button name="c" theme="danger" bare>
          Danger
        </Button>
      </>
    )
  )
  .add(
    'Disabled',
    (): JSX.Element => (
      <>
        <Button name="a" disabled>
          Primary
        </Button>
        <Button name="b" theme="secondary" disabled>
          Secondary
        </Button>
        <Button name="b" theme="success" disabled>
          Success
        </Button>
        <Button name="c" theme="danger" disabled>
          Danger
        </Button>
      </>
    )
  );
