import { MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import './BoardBox.css'

const BoardBox = (props) => {

    const { name, description, key } = props

    return (
        <MDBCard key={key} className="card-body board-box" style={{ width: "22rem", marginTop: "1rem" }}>
            <MDBCardTitle className="board-box-title">{name}</MDBCardTitle>
                <MDBCardText className="board-box-desription">
                {description}
                </MDBCardText>
                <div className="flex-row">
                <a id="board-box-link" href="#!" style={{ marginLeft: "1.25rem" }}>Read More...</a>
            </div>
      </MDBCard>
    )
}

export default BoardBox