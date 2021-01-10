import { useContext, useEffect } from "react"
import { ForumContext } from "../../../../../../context/ForumContext"
import ThreadBox from "../ThreadBox/ThreadBox"
import "./Threads.css"

const Threads = () => {

    const { selectedThreads, currentBoardName } = useContext(ForumContext)

    useEffect(() => {
        window.scrollTo(0, 0);
        });

    const threads = selectedThreads.map((thread, index) => {
        console.log(thread)
        return (
        <ThreadBox 
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
            <h1 className="page-heading">{currentBoardName}</h1>
            <p>{threads}</p>
        </div>
    )
}

export default Threads