import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <li className={styles.contactItem} key={id}>
            {name} : {number}
            <button
              type="button"
              className={styles.button}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <li className={styles.notification}>No contact found</li>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onDeleteContact: () => null,
};

export default connect(null, mapDispatchToProps)(ContactList);
