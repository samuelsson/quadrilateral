import React from 'react';

export interface UserInfoProps {
  username?: string;
}

const UserInfo = ({ username }: UserInfoProps): JSX.Element => {
  const isLoggedIn = !!username;

  return isLoggedIn ? <span>{username}</span> : <a href="/login">login</a>;
};

export default UserInfo;
