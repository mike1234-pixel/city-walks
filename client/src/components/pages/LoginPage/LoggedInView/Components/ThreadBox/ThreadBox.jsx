import { useState } from "react"
import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import './ThreadBox.css'

const ThreadBox = (props) => {

    const { userFirstName, title, content, replies, submittedOn, userId } = props

    const [showAllReplies, setShowAllReplies] = useState(false)

    const replyComponents = replies.map((reply) => {
        return (
        <div className="reply">
            <p>{reply.userFirstName} replied!</p>
            <p>{reply.reply}</p>
            <p>{reply.submittedOn}</p>
        </div>
        )
    })

    let displayReplies;
    if (showAllReplies) {
        displayReplies = replyComponents;
        console.log(replyComponents)
    } else {
        // if end is greater than array length, slice uses the array length as the last index
        displayReplies = replyComponents.slice(0,3)
    }

    return (
        <MDBCard className="card-body" id="thread-box">
            <MDBCardTitle className="thread-box-title">{title}</MDBCardTitle>
                <MDBCardText className="thread-box-content">
                    {content}
                </MDBCardText>
                <p>Posted by {userFirstName} on {submittedOn}</p>
                <p>Replies</p>
                <div className="replies-container">{displayReplies}</div>
                <MDBBtn onClick={() => setShowAllReplies(!showAllReplies)}>{showAllReplies ? "hide replies" : "show all replies"}</MDBBtn>
        </MDBCard>
    )
}

export default ThreadBox