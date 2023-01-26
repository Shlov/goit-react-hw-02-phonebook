import { Button, Item, List } from "./ListContacts.styled"


export const ListContacts = ({filter, contacts, onDeleteContact}) => {
  return (
    <List>
      {!filter ? contacts.map(contact => 
        <Item key = {contact.id}>{contact.name}: {contact.number} 
        <Button onClick = {() => onDeleteContact(contact.name)}>Delete</Button>
        </Item>) 
      : contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())).map(contact => 
        <Item key = {contact.id}>{contact.name}: {contact.number} 
        <Button onClick = {() => onDeleteContact(contact.name)}>Delete</Button>
        </Item>
      )}
    </List>
  )
}