

export const SearchContact = ({onSearch}) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        onChange={(e)=> onSearch(e)}
        type="text" 
      />
    </label>
  )
}