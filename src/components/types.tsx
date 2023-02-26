export type ContactListItemType = {
  id: string;
  name: string;
  number: string;
  deleteContact: (x: string) => void;
};

export type ContactItem = {
  id: string;
  name: string;
  number: string;
};

export type ContactListType = {
  contacts: Array<ContactItem>;
  deleteContact: (x: string) => void;
};

export type StateType = {
  contacts: Array<ContactItem>;
  filter: string,
}

export type FilterType = {
  value: string;
  onChange: (x: any) => void;
};

export type ValuesType = {
  name: string;
  number: string;
};

export type OnSubmitType = {
  onSubmit: (x: ValuesType) => void;
};

export type ResetFormType = {
  resetForm: () => void;
};
