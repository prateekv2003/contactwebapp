import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './addContact.css'
export default class AddContact extends Component {
  state = {
    name : "",
    email : "",
    phone : ""
  }

  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === "" || this.state.phone === ""){
      alert("All the fields are mandatory!");
      return
    }
    this.props.addContactsHandler(this.state);
    this.setState({name:"", email:"", phone:""});
  }
  render() {
    return (
      <div className='container__addcontact'>
        <Link className="back-contact-list-btn" to="/">
          Back to Contact List
        </Link>
        <div className='wrapper'>
          <h1>Add Contact</h1>
          <form action="#" className='contact__form' onSubmit={this.add}>
            <div className='input__element'>
                <label>Name</label>
                <input type="text" name="name" id="name" placeholder='Name' value={this.state.name} onChange={(e)=> this.setState({name : e.target.value})}/>
            </div>
            <div className='input__element'>
                <label>Email</label>
                <input type="text" name="email" id="email" placeholder='Email' value={this.state.email} onChange={(e)=> this.setState({email : e.target.value})}/>
            </div>
            <div className='input__element'>
                <label>Phone</label>
                <input type="tel" name="phone" id="phone" placeholder='Phone number' value={this.state.phone} onChange={(e)=> this.setState({phone : e.target.value})}/>
            </div>
            <button type='submit'>Add Contact</button>
          </form>
        </div>
      </div>
    )
  }
}
