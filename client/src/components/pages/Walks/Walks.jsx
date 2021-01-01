import { useEffect } from "react"
import './Walks.css'
import { useHistory } from "react-router-dom"
import data from './dummyData.json'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import { FaSearchLocation } from "react-icons/fa"

const Walks = (props) => {

    let {searchValue} = props

    const walksArr = props.walks

    let history = useHistory()

    const handleRedirect =(redirectTo) => {
          history.push(`/${redirectTo}`)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      });
    
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
                    <MDBCard className="walk-card">
                        <MDBCardImage className="cutter img-fluid" src={v.coverImg} waves/>
                        <MDBCardBody>
                        <MDBCardTitle>{v.city}</MDBCardTitle>
                        <MDBCardTitle>{v.walk}</MDBCardTitle>
                        <MDBCardText>{v.description}</MDBCardText>
                        <MDBBtn className="city-card-btn" onClick={() =>handleRedirect(v.route)}>Click</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    )
            })}
            
            </div>
        </div>
    )
    } else if (walksArr.map(v => { v.walk.toLowerCase().includes(searchValue.toLowerCase()) || v.city.toLowerCase().includes(searchValue.toLowerCase()) } )) {
        return (
        <div>
            <div className="page-header-container">
                <h1 className="page-header" data-testid="walks-page-heading">Walks</h1>
                <MDBBtn className="city-card-btn" onClick={() => props.setSearchValue("")}>Show all walks</MDBBtn>
                <p><FaSearchLocation className="search-location-icon"/>{`  ${searchValue}`}</p>
            </div>
            <div className="card-container">
                {walksArr.map(v => {
                if (v.walk.toLowerCase().includes(searchValue.toLowerCase()) || v.city.toLowerCase().includes(searchValue.toLowerCase())) {
                return (
                    <MDBCol style={{ maxWidth: "22rem" }} key={v.id}>
                    <MDBCard className="walk-card">
                        <MDBCardImage className="cutter img-fluid" src={v.coverImg} waves/>
                        <MDBCardBody>
                        <MDBCardTitle>{v.city}</MDBCardTitle>
                        <MDBCardTitle>{v.walk}</MDBCardTitle>
                        <MDBCardText>{v.description}</MDBCardText>
                        <MDBBtn className="city-card-btn" onClick={() =>handleRedirect(v.route)}>Click</MDBBtn>
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