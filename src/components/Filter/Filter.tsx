import React from 'react';
import css from './Filter.module.css';
import { FilterType } from 'components/types';

export function Filter({ value, onChange }: FilterType) {
  return (
    <input
      className={css.filterInput}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Find contact by name"
    />
  );
}
