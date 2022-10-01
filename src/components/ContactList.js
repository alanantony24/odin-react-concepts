import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderContactsList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });
    return (
        <div className="ui celled list">
           {renderContactsList}
        </div>
    )
}

export default ContactList;