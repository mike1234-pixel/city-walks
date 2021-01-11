import { MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import { useEffect, useContext } from "react"
import { ForumContext } from "../../../../../../context/ForumContext"
import './BoardBox.css'
import { Link } from "react-router-dom"
import urlify from "../../../../../../functions/urlify"

const BoardBox = (props) => {

    const { boards } = useContext(ForumContext)

    const { name, description } = props

    useEffect(() => {
        window.scrollTo(0, 0);
        });

    return (
        <MDBCard className="card-body" id="board-box">
            <MDBCardTitle className="board-box-title">{name}</MDBCardTitle>
                <MDBCardText className="board-box-desription">
                {description}
                </MDBCardText>
                <div className="flex-row">
                <Link to={'boards/'+urlify(name)}>Read More...</Link>
            </div>
      </MDBCard>
    )
}

export default BoardBox