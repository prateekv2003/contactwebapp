import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import './contactDetail.css'

const ContactDetail = () => {
    const contact = useLocation().state;
    let name = contact.name;
    let email = contact.email;
    let phone = contact.phone;
    let fname = contact.fname;
    let lname = contact.lname;
    return (
        <div className='container'>
            <Link className="back-contact-list-btn" to="/">
                Back to Contact List
            </Link>
            <div className="contact-card">
                <div className='image-container'><img src={`https://eu.ui-avatars.com/api/?name=${fname}+${lname}&size=50`} alt="Image Not Found!" /></div>
                <div className="user-data">
                    <h1>{name}</h1>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail