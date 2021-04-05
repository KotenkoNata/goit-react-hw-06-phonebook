import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/Add', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/Filter');

const exports = { addContact, deleteContact, changeFilter };

export default exports;
