import { useContext, useEffect } from "react"
import { ForumContext } from "../../../../../../context/ForumContext"
import ThreadBox from "../ThreadBox/ThreadBox"
import "./Threads.css"

const Threads = () => {

    const { selectedThreads } = useContext(ForumContext)

    useEffect(() =>{
        console.log(selectedThreads)
    })

    // selectedThread is an array of threads,
    // map through it and display the threads.

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
            <p>{threads}</p>
        </div>
    )
}

export default Threads