import React from 'react';
import { NextPage } from 'next';
import { Button, Form, FormInput } from '@samuelsson/polygon-ui';
import Layout from '../components/Layout';
import useAuth from '../hooks/useAuth';

const LoginPage: NextPage = () => {
  const [{ isLoading }, { handleLogin, handleInputChange }] = useAuth();

  return (
    <Layout>
      <Form onSubmit={handleLogin}>
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
        <Button type="submit" name="login" disabled={isLoading} fluid>
          Login
        </Button>
      </Form>
    </Layout>
  );
};

export default LoginPage;
