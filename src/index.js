import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import {Contacts} from './Contacts/contacts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Contacts />
  </React.StrictMode>
);
