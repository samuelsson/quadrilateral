import React, { useState } from 'react';
import { signIn } from 'next-auth/client';

interface UseAuthState {
  isLoading: boolean;
}

interface UseAuthActions {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleInputChange: (name: string, value: string) => void;
}

const useAuth = (): [UseAuthState, UseAuthActions] => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

    try {
      setIsLoading(true);

      // Using NextAuth Credentials login
      const signInResponse = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      // Here we can redirect or handle errors
      console.log(signInResponse);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  return [{ isLoading }, { handleLogin, handleInputChange }];
};

export default useAuth;
