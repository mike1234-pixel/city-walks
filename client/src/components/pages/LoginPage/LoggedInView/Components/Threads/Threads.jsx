import { useContext, useEffect } from "react"
import { ForumContext } from "../../../../../../context/ForumContext"
import ThreadBox from "../ThreadBox/ThreadBox"
import toTitleCase from "../../../../../../functions/toTitleCase"
import "./Threads.css"

const Threads = ({match}) => {

    const { setCurrentBoardName, boards } = useContext(ForumContext)

    // name of the current board that I want. coming from params
    const boardName = toTitleCase(match.url.replace("/boards/", "").replace(/-/g, " "))

    const selectedBoard = boards.filter((board) => board.name === boardName)[0]

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(JSON.stringify(boards))
        console.log(selectedBoard[0])
        });

    const threads = selectedBoard.threads.map((thread, index) => {
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

    return (
        <div className="threads-container">
            <h1 className="page-heading">{boardName}</h1>
            <p>{threads}</p>
        </div>
    )
}

export default Threads