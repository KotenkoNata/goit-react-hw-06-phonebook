import types from './contacts-types';
import shortid from 'shortid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = filter => ({
  type: types.FILTER,
  payload: filter,
});

const exports = { addContact, deleteContact, changeFilter };

export default exports;
