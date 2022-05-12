import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import UserProvider from './components/context/UserProvider';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
 <BrowserRouter>
  <UserProvider>
    <App />
  </UserProvider>
 </BrowserRouter>

);



