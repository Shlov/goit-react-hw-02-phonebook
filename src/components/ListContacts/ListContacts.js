

export const ListContacts = ({filter, contacts, onDeleteContact}) => {
  return (
    <ul>
      {!filter ? contacts.map(contact => 
        <li key = {contact.id}>{contact.name}: {contact.number} 
        <button onClick = {() => onDeleteContact(contact.name)}>Delete</button>
        </li>) 
      : contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())).map(contact => 
        <li key = {contact.id}>{contact.name}: {contact.number} 
        <button onClick = {() => onDeleteContact(contact.name)}>Delete</button>
        </li>
      )}
    </ul>
  )
}      