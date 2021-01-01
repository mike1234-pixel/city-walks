import './Cities.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'

const Cities = (props) => {

    const data = props.cities

    const cities = data.map((city) => {
        return (
        <MDBCol style={{ maxWidth: "22rem" }} key={city.id}>
        <MDBCard className="city-card">
            <MDBCardImage className="cutter img-fluid" src={city.img}
            waves />
            <MDBCardBody>
            <MDBCardTitle>{city.city}</MDBCardTitle>
            <MDBCardText>{city.description}</MDBCardText>
            <MDBBtn className="city-card-btn" onClick={() => props.handleClick(city.city)}>Click</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        )
    })

    return (
        <div className="cities-page-container">
            <div className="page-header-container">
                <h1 className="page-header">Cities</h1>
            </div>
                <div className="card-container">{cities}</div>
            </div>
    )
}

export default Cities

// these cards will conduct a search and filter the walks by city -- each one will link to the walks page