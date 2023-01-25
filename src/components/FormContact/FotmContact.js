import { Component } from "react";


export class FormContact extends Component {
  state = {
    name: '',
    number: ''
  }

  recordName = (evnt) => {
    this.setState({name: evnt.target.value})
  }
  
  recordNumber = (evnt) => {
    this.setState({number: evnt.target.value})
  }

  transferContact = (evnt) => {
    evnt.preventDefault();
    const name = this.state.name
    const number = this.state.number
    this.props.onAddContact(name, number, evnt)
    // this.setState({name: '', number: ''})
  }

  render () {
    return (
    <form action="" onSubmit = {(e) => this.transferContact(e)}>
          <label>
            Name
            <input
            onChange = {(e) => this.recordName(e)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              onChange = {(e) => this.recordNumber(e)}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          
          <button type="submit" >
            Add contact
          </button>
        </form>
    )
  }

}