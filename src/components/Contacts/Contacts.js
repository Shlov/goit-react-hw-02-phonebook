import { ListContacts } from "components/ListContacts/ListContacts"
import { SearchContact } from "components/SearchContact/SearchContact"


export const Contacts = ({onSearch, filter, contacts, onDeleteContact}) => {
  return (
    <>
      <SearchContact onSearch = {onSearch}/>
      <ListContacts filter = {filter} contacts = {contacts} onDeleteContact = {onDeleteContact}/>
    </>
  )
}