let SearchBar = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
          <input type="text" value={props.searchValue} onChange={props.handleChange}/>
          <button type="submit">Submit</button>
      </form>
    )
}

export default SearchBar;
