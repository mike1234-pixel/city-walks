import { useContext } from "react"
import { MDBInput } from "mdbreact"
import { FaSearchLocation } from "react-icons/fa"
import { SearchContext } from "../../context/SearchContext"
import './SeachBar.css'

let SearchBar = () => {

  const { handleSubmitSearch, searchValue, handleChangeSearch } = useContext(SearchContext)

    return (
      <form onSubmit={handleSubmitSearch}>
        <span style={{ marginRight: "40px"}} className="search-container">
          <MDBInput  
            data-testid="search-input" 
            label="Search Walks" 
            name="search-input" 
            id="search-input" 
            type="text" placeholder="Search" 
            value={searchValue} 
            onChange={handleChangeSearch}
            />
         <button type="submit" data-testid="search-btn" className="search-btn"><FaSearchLocation id="search-btn-icon" className="search-location-icon"/></button> 
        </span>
      </form>
    )
}

export default SearchBar;

// controlled input:
// --> input value is set with *props* provided through React 
// --> the form data and the input value is updated through on *onChange* handler


