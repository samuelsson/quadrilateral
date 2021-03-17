import React from 'react';
import styles from './UserInfo.module.scss';

export interface UserInfoProps {
  username: string;
  onClickCallback: () => void;
}

const UserInfo = ({
  onClickCallback,
  username,
}: UserInfoProps): JSX.Element => {
  return (
    <button type="button" className={styles.UserInfo} onClick={onClickCallback}>
      {username}
    </button>
  );
};

export default UserInfo;
