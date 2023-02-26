import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import React from 'react';
import { ContactListType } from 'components/types';

export function ContactList({ contacts, deleteContact }: ContactListType) {
  return (
    <ul className={css.contactList}>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        ))}
    </ul>
  );
}
