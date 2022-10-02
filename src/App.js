/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import api from './api/contacts';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetail'
import EditContact from './components/EditContact'
import { ContactsCrudContextProvider } from './context/ContactsCrudContext'

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={<ContactList />}
            />
            <Route path="/add"
              element={<AddContact />}
            />
            <Route path="/edit"
              element={<EditContact />}
            />
            <Route path="/contact/:id" element={<ContactDetails />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
