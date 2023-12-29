import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      } 
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    setContacts((prevContacts) => [...prevContacts, newContact]);
    setName('');
    setNumber('');
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm name={name} number={number} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};
