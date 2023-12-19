import React from 'react';

export const Filter = ({ filter, handleFilterChange }) => (
  <label style={{ display: 'flex', flexDirection: 'column', maxWidth: '150px', marginTop: '20px' }}>
    Search:
    <input type="text" name="filter" value={filter} onChange={handleFilterChange} />
  </label>
);
