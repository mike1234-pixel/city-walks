import './Walks.css'
import data from './dummyData.json'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'

const Walks = (props) => {

    let {searchValue} = props

    // filter walks by query,
    // if nothing entered, show all walks, 
    // if value entered but no match, show 'No matches found'
    // if the walk value or the city value in each walk matches the searchValue, show walk

        const walksArr = data.walks

        // <MDBCol style={{ maxWidth: "22rem" }}>
        // <MDBCard className="city-card">
        //     <MDBCardImage className="cutter img-fluid" src={v.cover_img_link}
        //     waves />
        //     <MDBCardBody>
        //     <MDBCardTitle>{JSON.stringify(v.city)}</MDBCardTitle>
        //     <MDBCardTitle>{JSON.stringify(v.walk)}</MDBCardTitle>
        //     <MDBCardText>{JSON.stringify(v.description)}</MDBCardText>
        //     <MDBBtn className="city-card-btn">Click</MDBBtn>
        //     </MDBCardBody>
        // </MDBCard>
        // </MDBCol>

    if (searchValue === "") {
    return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
            <div  className="card-container">
            {walksArr.map(v => {
                return (
                    <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard className="city-card">
                        <MDBCardImage className="cutter img-fluid" src={v.cover_img_link} waves/>
                        <MDBCardBody>
                        <MDBCardTitle>{JSON.stringify(v.city)}</MDBCardTitle>
                        <MDBCardTitle>{JSON.stringify(v.walk)}</MDBCardTitle>
                        <MDBCardText>{JSON.stringify(v.description)}</MDBCardText>
                        <MDBBtn className="city-card-btn">Click</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    )
            })}
            </div>
        </div>
    )
    } else if (walksArr.map(v => {v.walk.includes(searchValue) || v.city.includes(searchValue)})) {
        return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
            <div className="card-container">
                {walksArr.map(v => {
                if (v.walk.includes(searchValue) || v.city.includes(searchValue)) {
                console.log(v.walk, v.city)
                console.log(JSON.stringify(v.walk))
                return (
                    <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard className="city-card">
                        <MDBCardImage className="cutter img-fluid" src={v.cover_img_link} waves/>
                        <MDBCardBody>
                        <MDBCardTitle>{JSON.stringify(v.city)}</MDBCardTitle>
                        <MDBCardTitle>{JSON.stringify(v.walk)}</MDBCardTitle>
                        <MDBCardText>{JSON.stringify(v.description)}</MDBCardText>
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
        return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
            <p>No matches found</p>
        </div>
        )
    }
}

export default Walks
