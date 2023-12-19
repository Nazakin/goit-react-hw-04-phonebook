import React from 'react';

export const ContactForm = ({ name, number, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
    <label style={{ display: 'flex', flexDirection: 'column', maxWidth: '150px' }}>
      Name:
      <input type="text" name="name" value={name} onChange={handleChange} required />
    </label>
    <label style={{ display: 'flex', flexDirection: 'column', maxWidth: '150px' }}>
      Tel:
      <input type="tel" name="number" value={number } onChange={handleChange} required />
    </label>
    <button type="submit" style={{ maxWidth: '150px' }}>
      Add contact
    </button>
  </form>
);
