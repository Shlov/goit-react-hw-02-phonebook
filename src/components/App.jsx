import { Component } from "react";



export class App extends Component {
  
  state = {
    contacts: [],
    name: ''
  }

  recordName = (evnt) => {
    console.log(evnt.target.value)
    this.setState({name: evnt.target.value})
  }

  addContact = (e) => {
    e.preventDefault();
    console.log(this.state.name)
  }

  render () {
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

        </ul>
      </div>
    );
  }
}

// export const App = () => {
  
// };
