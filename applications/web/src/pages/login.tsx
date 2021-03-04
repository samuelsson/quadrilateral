import React from 'react';
import { NextPage } from 'next';
import { Button, FormInput } from '@samuelsson/polygon-ui';
import useAuth from '../hooks/useAuth';

const LoginPage: NextPage = () => {
  const [{ handleLogin, handleInputChange }] = useAuth();

  return (
    <form onSubmit={handleLogin}>
      <FormInput
        name="username"
        type="text"
        label="Username"
        onChange={handleInputChange}
      />
      <FormInput
        name="password"
        type="password"
        label="Password"
        onChange={handleInputChange}
      />
      <Button type="submit" name="login">
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
