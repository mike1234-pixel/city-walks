import { useState, useContext } from "react"
import { MDBInput, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import axios from "axios"
import qs from "qs"
import { LoginContext } from "../../../../../../context/LoginContext"
import { ForumContext } from "../../../../../../context/ForumContext"
import './ThreadBox.css'

const ThreadBox = (props) => {

    const { userFirstName: currentUserFirstName, userId: currentUserId } = useContext(LoginContext)
    const { currentBoardId } = useContext(ForumContext)

    const { currentBoardName, threadId, userFirstName, title, content, replies, submittedOn, userId } = props

    const [showAllReplies, setShowAllReplies] = useState(false)
    const [reply, setReply] = useState("")

    const handleChange = (event) => {
        setReply(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setReply("")

        let payload = {
            currentBoardName: currentBoardName,
            threadId: threadId,
            userId: currentUserId,
            userFirstName: currentUserFirstName,
            reply: reply, // send current user id
          };

        axios
        .post("http://localhost:5000/add-reply", qs.stringify(payload))
        .then((err) => {
          if (err) {
            console.log(err);
          } else {
              alert("reply submitted.")
              window.scrollTo(0, 0)
          }
        });
    }

    const handleClick = (replyId) => {
        let payload = {
            currentBoardName: currentBoardName,
            threadId: threadId,
            replyId: replyId
          };

        axios
        .delete("http://localhost:5000/delete-reply", { data: payload })
        .then((res, err) => {
          if (err) {
            console.log(err);
          }  else {
            alert("reply deleted.")
            window.scrollTo(0, 0)
          }
        });

    }

    const replyComponents = replies.map((reply) => {
        return (
        <div className="reply">
            <p>{reply.userFirstName} replied!</p>
            <p>{reply.reply}</p>
            <p>{reply.submittedOn}</p>
            {reply.userId === currentUserId ? <MDBBtn onClick={() => handleClick(reply._id)}>Delete</MDBBtn>: null}
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
                <form onSubmit={handleSubmit}>
                    <MDBInput  type="text" name="reply" id="reply" label="reply" value={reply} onChange={handleChange}/>
                    <MDBBtn type="submit">Submit</MDBBtn>
                </form>
        </MDBCard>
    )
}

export default ThreadBox

// // setter
// localStorage.setItem('myData', data);
 
// // getter
// localStorage.getItem('myData');
 
// // remove
// localStorage.removeItem('myData');
 
// // remove all
// localStorage.clear();