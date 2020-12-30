import './Walks.css'
import data from './dummyData.json'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import { FaSearchLocation } from "react-icons/fa"

const Walks = (props) => {

    let {searchValue} = props

    // filter walks by query,
    // if nothing entered, show all walks, 
    // if value entered but no match, show 'No matches found'
    // if the walk value or the city value in each walk matches the searchValue, show walk

    const walksArr = data.walks
    
    if (searchValue === "") {
    return (
        <div>
            <div className="page-header-container">
                <h1 className="page-header">Walks</h1>
                <MDBBtn className="city-card-btn" onClick={() => props.setSearchValue("")}>Show all walks</MDBBtn>
                <p><FaSearchLocation className="search-location-icon"/>{`  ${searchValue}`}</p>
            </div>
            <div  className="card-container">
            {walksArr.map(v => {
                return (
                    <MDBCol style={{ maxWidth: "22rem" }} key={v.id}>
                    <MDBCard className="city-card">
                        <MDBCardImage className="cutter img-fluid" src={v.cover_img_link} waves/>
                        <MDBCardBody>
                        <MDBCardTitle>{v.city}</MDBCardTitle>
                        <MDBCardTitle>{v.walk}</MDBCardTitle>
                        <MDBCardText>{v.description}</MDBCardText>
                        <MDBBtn className="city-card-btn">Click</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    )
            })}
            </div>
        </div>
    )
    } else if (walksArr.map(v => { v.walk.includes(searchValue) || v.city.includes(searchValue) } )) {
        return (
        <div>
            <div className="page-header-container">
                <h1 className="page-header" data-testid="walks-page-heading">Walks</h1>
                <MDBBtn className="city-card-btn" onClick={() => props.setSearchValue("")}>Show all walks</MDBBtn>
                <p><FaSearchLocation className="search-location-icon"/>{`  ${searchValue}`}</p>
            </div>
            <div className="card-container">
                {walksArr.map(v => {
                if (v.walk.includes(searchValue) || v.city.includes(searchValue)) {
                console.log(v.walk, v.city)
                console.log(JSON.stringify(v.walk))
                return (
                    <MDBCol style={{ maxWidth: "22rem" }} key={v.id}>
                    <MDBCard className="city-card">
                        <MDBCardImage className="cutter img-fluid" src={v.cover_img_link} waves/>
                        <MDBCardBody>
                        <MDBCardTitle>{v.city}</MDBCardTitle>
                        <MDBCardTitle>{v.walk}</MDBCardTitle>
                        <MDBCardText>{v.description}</MDBCardText>
                        <MDBBtn className="city-card-btn">Click</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    )
                }}
                )}
            </div>
        </div>
        )
    } else {
        // THIS BLOCK ISN'T BE BROKEN INTO AT ALL, ONLY THE ABOVE IS
        return (
        <div>
            <div className="page-header-container">
                <h1 className="page-header">Walks</h1>
                <MDBBtn className="city-card-btn" onClick={() => props.setSearchValue("")}>Show all walks</MDBBtn>
                <p><FaSearchLocation className="search-location-icon"/>{`  ${searchValue}`}</p>
            </div>
            <p>No matches found</p>
        </div>
        )
    }
}

export default Walks
