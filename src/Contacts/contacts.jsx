import React from 'react';
import { nanoid } from 'nanoid';
import {ContactForm} from './comp/ContactForm'
import {ContactList} from './comp/ontactList'
import { Filter } from './comp/Filter';
export class Contacts extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, contacts } = this.state;

    const isNameExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = (e) => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };
  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { name, number, contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
        <h1>Phonebook</h1>
        <ContactForm name={name} number={number} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        {filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
        ) : (
          <p>No contacts found</p>
        )}
    
      </div>
    );
  }
}
