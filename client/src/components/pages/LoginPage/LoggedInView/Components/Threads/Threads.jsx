import { useContext, useEffect, useState } from "react"
import { ForumContext } from "../../../../../../context/ForumContext"
import { LoginContext } from "../../../../../../context/LoginContext"
import ThreadBox from "../ThreadBox/ThreadBox"
import toTitleCase from "../../../../../../functions/toTitleCase"
import { MDBBtn, MDBInput } from "mdbreact"
import axios from "axios"
import qs from "qs"
import "./Threads.css"

const Threads = ({match}) => {

    const { boards, loadingBoards } = useContext(ForumContext)
    const { loggedIn, userId, userFirstName } = useContext(LoginContext)

    const boardName = toTitleCase(match.url.replace("/boards/", "").replace(/-/g, " "))

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    let threads = "loading";
    
    if (!loadingBoards) {

    const selectedBoard = boards.filter((board) => board.name === boardName)[0]

    if (selectedBoard === undefined) {
        threads = "thread not found"
    } else {

        threads = selectedBoard.threads.map((thread) => {
            return (
            <ThreadBox 
                currentBoardName={boardName}
                threadId={thread._id}
                userFirstName={thread.UserFirstName}
                title={thread.title}
                content={thread.content}
                replies={thread.replies}
                submittedOn={thread.submittedOn}
                userId={thread.userId}
                />
            )
        })
    }
}

    const [threadName, setThreadName] = useState("")
    const [threadContent, setThreadContent] = useState("")

    const handleChange = (event) => {

        switch(event.target.name) {
            case "add-thread-name":
              setThreadName(event.target.value)
              break;
            case "add-thread-content":
              setThreadContent(event.target.value)
              break;
        }
   
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            currentBoardName: boardName,
            userId: userId,
            userFirstName: userFirstName,
            title: threadName,
            content: threadContent
          };

        axios
        .post("http://localhost:5000/add-thread", qs.stringify(payload))
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else {
              alert("thread submitted.")
              setThreadName("")
              setThreadContent("")
              window.location.reload()
          }
        });
    }

const addThread = 
<form onSubmit={handleSubmit}>
    <MDBInput type="text" name="add-thread-name" id="add-thread-name" onChange={handleChange} value={threadName} label="thread name"/>
    <MDBInput type="textarea" rows="6" name="add-thread-content" id="add-thread-content" onChange={handleChange} value={threadContent} label="thread content"/>
    <MDBBtn type="submit">Add Thread</MDBBtn>
</form>

    return (
        <div className="threads-container">
            <h1 className="page-heading">{boardName}</h1>
                {loggedIn && addThread}
            <div>{threads}</div>
        </div>
    )
}

export default Threads