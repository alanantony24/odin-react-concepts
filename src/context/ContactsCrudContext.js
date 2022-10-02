import { createContext, useContext, useState } from "react";
import api from '../api/contacts'

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
    const [contacts, setContacts] = useState([]);

    //Retrieve contacts API
    const retrieveContacts = async () => {
        const response = await api.get("/contacts")
        if(response.data) setContacts(response.data);
    }

    //Delete contacts api
    const removeContactHandler = async (id) => {
        api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact) => {
          return contact.id !== id;
        });
        setContacts(newContactList);
      }

    const value = {
        contacts,
        retrieveContacts,
        removeContactHandler
    }

    return <contactsCrudContext.Provider value={value}>
        {children}
    </contactsCrudContext.Provider>
}

export function useContactsCrud() {
    return useContext(contactsCrudContext);
}