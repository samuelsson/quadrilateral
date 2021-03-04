import React, { useState } from 'react';
import { signIn } from 'next-auth/client';

interface UseAuthActions {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleInputChange: (name: string, value: string) => void;
}

const useAuth = (): [UseAuthActions] => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // If growing larger we can switch to useReducer instead.
  const handleInputChange = (name: string, value: string) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // Using NextAuth Credentials login
    const signInResponse = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    // Here we can redirect or handle errors
    console.log(signInResponse);
  };

  return [{ handleLogin, handleInputChange }];
};

export default useAuth;
