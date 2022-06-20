import React from 'react'
import { Link } from 'react-router-dom'
import './contactCard.css'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'
const ContactCard = (props) => {
    const contact = props.contact
    const deleteContact = () => {
        props.getContactID(contact.id);
    }
    let name = contact.name.split(" ")
    let fname = contact.name.split(" ")[0];
    let lname = contact.name.split(" ")[name.length - 1];
    return (
        <div key={contact.id} className='contact__card'>
            <img className="user-image" src={`https://eu.ui-avatars.com/api/?name=${fname}+${lname}&size=50`}></img>
            <Link to={`/contact/${contact.id}`} state={{ ...contact, fname: fname, lname: lname }} className="contact-link">
                <p><strong>Name: </strong>{contact.name}</p>
                <p><strong>Email: </strong>{contact.email}</p>
                <p><strong>Phone: </strong>{contact.phone}</p>
            </Link>

            <button className='btn call-icon' ><a href={`tel:${contact.phone}`}><FiPhone /></a></button>

            <button className='btn mail-icon' ><a href={`mailto:${contact.email}`} target="_blank"><FiMail /></a></button>
            <Link to="/edit" state={contact}>
                <button className='btn edit-icon'><FaRegEdit /></button>
            </Link>
            <button className='btn trash__can' onClick={() => deleteContact()} ><FaRegTrashAlt /></button>
        </div>
    )
}

export default ContactCard