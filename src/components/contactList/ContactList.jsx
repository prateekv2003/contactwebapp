import React from 'react'
import { Link } from 'react-router-dom'
import './contactList.css'
import { ImSearch } from 'react-icons/im'
import ContactCard from '../contactCard/ContactCard'
const ContactList = (props) => {

    const sendSearchTerm = (term) => {
        props.searchTermHandler(term)
    }
    return (
        <div className='container__contactlist'>
            <h1>Contact List</h1>
            <Link className="add-contact-btn" to="/add">
                Add Contact
            </Link>
            <div className="search-bar_div">
                <input type="text" className='search-bar' placeholder='Search Contacts' onChange={(e) => sendSearchTerm(e.target.value)} />
                <button className='search-btn' type='submit'><ImSearch /></button>
            </div>
            <div className='contact__list'>
                {
                    props.contacts.length ?
                        props.contacts.map((contact) => {
                            return (
                                <ContactCard contact={contact} getContactID={props.getContactID} />
                            )
                        }
                        ) :
                        <h1>No contacts to show!</h1>
                }
            </div>
        </div>
    )
}

export default ContactList