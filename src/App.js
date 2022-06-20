import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import AddContact from './components/addContact/AddContact'
import EditContact from './components/editContact/EditContact'
import ContactList from './components/contactList/ContactList'
import uuid from 'react-uuid'
import ContactDetail from './components/contactDetail/ContactDetail';
import axios from 'axios';
function App() {
  const [contacts, SetConatcts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // checking whether we are in developement environment or in production environment.......
  const devEnv = process.env.NODE_ENV4 === "production";
  // const api = devEnv ? "https://contactwebapp.herokuapp.com/contacts" : "http://localhost:3006/contacts";
  const api = "https://contactwebapp.herokuapp.com/contacts";

  // Fetching contacts from api.....
  const retrieveContacts = async () => {
    const res = await axios.get(api);
    return res.data
  }

  //Adding new contact....
  const addContactsHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await axios.post(api, request);
    SetConatcts([...contacts, response.data]);
  }

  // deleting a contact.....
  const removeContactsHandler = async (id) => {
    await axios.delete(api+"/"+id);

    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });

    SetConatcts(newContacts)
  }

  //Editing a contact......
  const editContactsHandler = async (contact) => {
    const response = await axios.put(api+"/"+contact.id, contact);
    const {id , name, email, phone} = response.data;
    console.log(id);
    console.log(response.data);
    SetConatcts(contacts.map((contact)=>{
      return contact.id === id ? response.data : contact
    }))
  }

  //Search Contact....
  const searchTermHandler = (term) => {
    setSearchTerm(term)
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(term.toLowerCase());
      })
      setSearchResult(newContactList);
    }else{
      setSearchResult(contacts)
    }
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) SetConatcts(allContacts);
    }
    getAllContacts(); // calling the function.....
  }, [])

  return (
    <>

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResult} getContactID={removeContactsHandler} searchTermHandler={searchTermHandler} />} />

          <Route path="/add" element={<AddContact addContactsHandler={addContactsHandler} />} />

          <Route path="/contact/:id" element={<ContactDetail />} />

          <Route path="/edit" element={<EditContact editContactHandler={editContactsHandler}/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
