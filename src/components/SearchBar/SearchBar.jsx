let SearchBar = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
          <input  name="search-input" id="search-input" type="text" placeholder="Search" value={props.searchValue} onChange={props.handleChange}/>
          <button type="submit">Search</button>
      </form>
    )
}

export default SearchBar;

// controlled input:
// --> input value is set with *props* provided through React 
// --> the form data and the input value is updated through on *onChange* handler