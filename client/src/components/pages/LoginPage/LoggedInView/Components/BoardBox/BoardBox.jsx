import { MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import urlify from "../../../../../../functions/urlify"
import './BoardBox.css'

const BoardBox = (props) => {

    const { threads } = props

    let history = useHistory()

    const handleRedirect =(redirectTo) => {
          history.push(`/${redirectTo}`)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      });

    const { name, description, key } = props

    return (
        <MDBCard key={key} className="card-body" id="board-box" style={{ width: "22rem", marginTop: "1rem" }}>
            <MDBCardTitle className="board-box-title">{name}</MDBCardTitle>
                <MDBCardText className="board-box-desription">
                {description}
                </MDBCardText>
                <div className="flex-row">
                <a id="board-box-link" onClick={() =>handleRedirect(urlify(name))} style={{ marginLeft: "1.25rem" }}>Read More...</a>
            </div>
      </MDBCard>
    )
}

export default BoardBox