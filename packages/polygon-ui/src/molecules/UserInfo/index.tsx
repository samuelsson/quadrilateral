import React from 'react';
import styles from './UserInfo.module.scss';

export interface UserInfoProps {
  username: string;
}

const UserInfo = ({ username }: UserInfoProps): JSX.Element => {
  return (
    <button type="button" className={styles.UserInfo}>
      {username}
    </button>
  );
};

export default UserInfo;
