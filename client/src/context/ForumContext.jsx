import { createContext, useState } from "react"
import BoardBox from "../components/pages/LoginPage/LoggedInView/Components/BoardBox/BoardBox"

export const ForumContext = createContext();

export const ForumContextProvider = (props) => {
 
    const [loadingBoards, setLoadingBoards] = useState(true)
    const [boards, setBoards] = useState([])
    const [selectedThreads, setSelectedThreads] = useState([])

    const [currentBoardName, setCurrentBoardName] = useState("")
    const [currentBoardId, setCurrentBoardId] = useState("")

    let displayBoards;

    if (!loadingBoards) {
    displayBoards = boards.map((board, index) => {
        return (
            <BoardBox boardId={board._id} name={board.name} description={board.description} index={index} key={index} />
                )
        })
        // create routes for boards with Thread as the view component
    }

    return (
        <ForumContext.Provider 
            value={{
                setBoards,
                boards, // data
                setLoadingBoards,
                loadingBoards,
                displayBoards,
                setSelectedThreads,
                selectedThreads, 
                setCurrentBoardName,
                currentBoardName,
                setCurrentBoardId,
                currentBoardId,
            }}>
            {props.children}
        </ForumContext.Provider>
    )
}

