import { useContext } from "react"
import { SearchContext } from '../../../context/SearchContext'
import { MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import './Cities.css'

const Cities = (props) => {

    const data = props.cities

    const { handleClickSearch } = useContext(SearchContext)

    const cities = data.map((city) => {
        return (
        <MDBCol key={city._id}>
        <MDBCard className="city-card">
            <MDBCardImage className="cutter img-fluid" src={city.img} alt={city.city} waves/>
            <MDBCardBody>
            <MDBCardTitle>{city.city}</MDBCardTitle>
            <MDBCardText>{city.description}</MDBCardText>
            <MDBBtn outline color="white" className="city-card-btn" onClick={() => handleClickSearch(city.city)}>Find walks <MDBIcon icon="search"/></MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        )
    })

    return (
        <div className="cities-page-container min-page-height">
            <div className="page-heading-container">
                <h1 className="page-heading">Cities</h1>
            </div>
                <div className="card-container">{cities}</div>
        </div>
    )
}

export default Cities

// these cards will conduct a search and filter the walks by city -- each one will link to the walks page