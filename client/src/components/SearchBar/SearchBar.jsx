import { MDBInput } from "mdbreact"
import { FaSearchLocation } from "react-icons/fa"
import './SeachBar.css'

let SearchBar = (props) => {

  const { handleSubmit, searchValue, handleChange } = props

    return (
      <form onSubmit={handleSubmit}>
        <span style={{ marginRight: "40px"}} className="search-container">
          <MDBInput  
            data-testid="search-input" 
            label="Search" 
            name="search-input" 
            id="search-input" 
            type="text" placeholder="Search" 
            value={searchValue} 
            onChange={handleChange}
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


