import { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import { FaSearchLocation } from "react-icons/fa"
import { SearchContext } from '../../../context/SearchContext'
import './Walks.css'

const Walks = (props) => {

    const walksArr = props.walks

    let { searchValue, setSearchValue } = useContext(SearchContext)

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
                <MDBBtn className="city-card-btn" onClick={() => setSearchValue("")}>Show all walks</MDBBtn>
                <p><FaSearchLocation className="search-location-icon"/>{`  ${searchValue}`}</p>
            </div>
            <div  className="card-container">
            {walksArr.map(v => {
                return (
                    <MDBCol style={{ maxWidth: "22rem" }} key={v._id}>
                    <MDBCard className="walk-card">
                        <MDBCardImage className="cutter img-fluid" src={v.coverImg} waves/>
                        <MDBCardBody>
                        <MDBCardTitle>{v.city}</MDBCardTitle>
                        <MDBCardTitle>{v.walk}</MDBCardTitle>
                        <MDBCardText>{v.description}</MDBCardText>
                        <MDBBtn className="city-card-btn" onClick={() =>handleRedirect(v.walk.toLowerCase().replace(/ /g, '-'))}>Click</MDBBtn>
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
                <MDBBtn className="city-card-btn" onClick={() => setSearchValue("")}>Show all walks</MDBBtn>
                <p><FaSearchLocation className="search-location-icon"/>{`  ${searchValue}`}</p>
            </div>
            <div className="card-container">
                {walksArr.map(v => {
                if (v.walk.toLowerCase().includes(searchValue.toLowerCase()) || v.city.toLowerCase().includes(searchValue.toLowerCase())) {
                return (
                    <MDBCol style={{ maxWidth: "22rem" }} key={v._id}>
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
    }
}

export default Walks