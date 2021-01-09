import { MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { ForumContext } from "../../../../../../context/ForumContext"
import './BoardBox.css'

const BoardBox = (props) => {

    const { setSelectedThreads, boards } = useContext(ForumContext)

    const { name, description, index } = props

    let history = useHistory()

    const handleRedirect =(redirectTo) => {
        history.push(`/${redirectTo}`)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(boards)
        });


        const handleClickSelectBoard = (boards, boardIndex) => {
            setSelectedThreads(boards[boardIndex].threads)
            console.log("SELECTED BOARD " + JSON.stringify(boards[boardIndex].threads))
            handleRedirect('threads')
        }


    return (
        <MDBCard className="card-body" id="board-box">
            <MDBCardTitle className="board-box-title">{name}</MDBCardTitle>
                <MDBCardText className="board-box-desription">
                {description}
                </MDBCardText>
                <div className="flex-row">
                <a id="board-box-link" onClick={() => handleClickSelectBoard(boards, index)} style={{ marginLeft: "1.25rem" }}>Read More...</a>
            </div>
      </MDBCard>
    )
}

export default BoardBox