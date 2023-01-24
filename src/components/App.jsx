import { Component } from "react";
import { nanoid } from 'nanoid';



export class App extends Component {
  
  state = {
    contacts: [{id: "jNXoZeO0-bIoz3ObfEAG7", name: "Anpu"}, {id: "j4Is3cCT0J1Aj8rLIHcKE", name: "Givgik"}],
    name: ''
  }

  recordName = (evnt) => {
    this.setState({name: evnt.target.value})
  }
  
  addContact = (e) => {
    e.preventDefault();
    const contact = {id: nanoid(), name: this.state.name}
    // console.log(contact)
    // this.setState(prevState => prevState.contacts = [...prevState.contacts, contact])
    this.setState(state => state = {name: '' , contacts: [...state.contacts, contact]})
    console.dir(e.target.elements)
    e.target.reset()
    // console.log(this.state.name)
    // reset()
  }

  render () {
    const contacts = this.state.contacts
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h2>Phonebook</h2>
        <form action="" onSubmit = {(evnt) => this.addContact(evnt)}>
          <input
          onChange = {(e) => this.recordName(e)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          <button type="submit" >
            Add contact
          </button>
        </form>
        <h3>Contact</h3>
        <ul>
          {contacts.map(contact => 
            <li key = {contact.id}>{contact.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

// export const App = () => {
  
// };
