import PropTypes from 'prop-types';
import './ContactListItem-styled.css';

export const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id} className="Contact__list__item__styled">
      <p className="Contact__name__styled">
        {name}:<span className="Contact__number__styled">{number}</span>
      </p>
      <button
        className="Contact__btn__styled"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
