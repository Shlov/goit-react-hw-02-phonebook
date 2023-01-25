import { Component } from "react";
import { nanoid } from 'nanoid';
import { FormContact } from "./FormContact/FotmContact";
import { Contacts } from "./Contacts/Contacts";



export class App extends Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
      ],
    filter: ''
  }

  recordFilter = (evnt) => {
    this.setState({filter: evnt.target.value})
  }

  addContact = (nameContact, numberContact, evnt) => {
    const include = this.state.contacts.some(({name}) => name.toLowerCase() === nameContact.toLowerCase())
    if (!include) {
      const contact = {id: nanoid(), name: nameContact, number: numberContact}
      this.setState(state => state = {contacts: [...state.contacts, contact]})
      evnt.target.reset()
    } else {
      alert(`${nameContact} is already in contacts.`)
    }
  }

  deleteContact = (delName) => {
    const newContacts = this.state.contacts.filter(({name}) => name.toLowerCase() !== delName.toLowerCase())
    this.setState({contacts: newContacts})
  }

  render () {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h2>Phonebook</h2> 
          <FormContact onAddContact = {this.addContact}/>
        <h3>Contacts</h3>
        <Contacts 
          onSearch = {this.recordFilter}
          filter = {this.state.filter}
          contacts = {this.state.contacts}
          onDeleteContact = {this.deleteContact}/>
      </div>
    );
  }
}
