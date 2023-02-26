import css from './ContactListItem.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { ContactListItemType } from 'components/types';
import React from 'react';

export function ContactListItem({ id, name, number, deleteContact }: ContactListItemType) {
  return (
    <li className={css.contactItem}>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <button
        type="button"
        className={css.delButton}
        onClick={() => deleteContact(id)}
        aria-label="Delete number"
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </li>
  );
}
