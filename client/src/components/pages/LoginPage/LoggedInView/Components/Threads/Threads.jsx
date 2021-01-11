import { useContext, useEffect } from "react"
import { ForumContext } from "../../../../../../context/ForumContext"
import ThreadBox from "../ThreadBox/ThreadBox"
import toTitleCase from "../../../../../../functions/toTitleCase"
import "./Threads.css"

const Threads = ({match}) => {

    const { boards, loadingBoards } = useContext(ForumContext)

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

    return (
        <div className="threads-container">
            <h1 className="page-heading">{boardName}</h1>
            <div>{threads}</div>
        </div>
    )
}

export default Threads