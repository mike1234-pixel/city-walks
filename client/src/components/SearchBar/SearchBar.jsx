import { MDBInput, MDBBtn } from "mdbreact"
import { FaSearchLocation } from "react-icons/fa"
import './SeachBar.css'

let SearchBar = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
        <span style={{ marginRight: "40px"}} className="search-container">
          <MDBInput  
            data-testid="search-input" 
            label="Search" 
            name="search-input" 
            id="search-input" 
            type="text" placeholder="Search" 
            value={props.searchValue} 
            onChange={props.handleChange}
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


