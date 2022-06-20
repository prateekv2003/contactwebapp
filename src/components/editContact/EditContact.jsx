import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../addContact/addContact.css'
const EditContact = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const contact = useLocation().state;

  const update = (e) => {
    e.preventDefault();
    props.editContactHandler({id: contact.id,name: name,email: email, phone: phone});
    setName("");
    setEmail("");
    setPhone("");
  }

  useEffect(()=>{
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
  }, [])

  return (
    <div className='container__addcontact'>
      <Link className="back-contact-list-btn" to="/">
        Back to Contact List
      </Link>
      <div className='wrapper'>
        <h1>Edit Contact</h1>
        <form action="#" className='contact__form' onSubmit={update}>
          <div className='input__element'>
            <label>Name</label>
            <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='input__element'>
            <label>Email</label>
            <input type="text" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input__element'>
                <label>Phone</label>
                <input type="tel" name="phone" id="phone" placeholder='Phone number' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            </div>
          <button type='submit'>Update Contact</button>
        </form>
      </div>
    </div>
  )
}

export default EditContact;