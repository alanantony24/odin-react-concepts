import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const {contacts, retrieveContacts} = useContactsCrud();
    const inputEl = useRef("");

    useEffect(() => {
        retrieveContacts();
    })

    const renderContactsList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} />
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value)
    }

    return (
        <div className="main">
            <h2>Contact List
                <Link to="/add"> <button className="ui button blue right">Add Contact</button></Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactsList.length > 0 ? renderContactsList : "No contacts available"}
            </div>
        </div>
    )
}

export default ContactList;