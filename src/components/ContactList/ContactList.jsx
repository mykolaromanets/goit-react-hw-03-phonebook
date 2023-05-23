import PropTypes from 'prop-types';

import { ContactsListItem } from '../ContactListItem/ContactListItem';
import './ContactList-styled.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="Contact__list__styled">
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};
