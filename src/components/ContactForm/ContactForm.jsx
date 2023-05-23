import React from 'react';
import './ContactForm-styled.css';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addContact } = this.props;

    addContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        className="Form-styled"
      >
        <label className="Label__form__styled">
          Name
          <input
            type="text"
            name="name"
            className="Input__form__styled"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className="Label__form__styled">
          Number
          <input
            type="tel"
            name="number"
            className="Input__form__styled"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className="Form__btn__styled">
          Add contact
        </button>
      </form>
    );
  }
}
