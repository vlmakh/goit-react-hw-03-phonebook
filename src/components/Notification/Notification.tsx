import css from './Notification.module.css';
import React from 'react';
import { NotificationType } from 'components/types';

export function Notification({ msg }: NotificationType) {
  return <p className={css.msgText}>{msg}</p>;
}
