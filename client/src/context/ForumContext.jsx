import { createContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import BoardBox from "../components/pages/LoginPage/LoggedInView/Components/BoardBox/BoardBox"

export const ForumContext = createContext();

export const ForumContextProvider = (props) => {
 
    const [loadingBoards, setLoadingBoards] = useState(true)
    const [boards, setBoards] = useState([])
    const [selectedThreads, setSelectedThreads] = useState([])

    const [currentBoardName, setCurrentBoardName] = useState("")
    const [currentBoardId, setCurrentBoardId] = useState("")

    let displayBoards;

    useEffect(() => {
    axios
    .get('http://localhost:5000/boards')
    .then((res, err) => {
        if (err) {
            console.log(err)
            alert("Could not connect to the server. Please try again.")
        } else {
            console.log(res.data)
            setBoards(res.data)
            console.log(boards)
            setLoadingBoards(false)
        }

    })}, []);

    if (!loadingBoards) {
    displayBoards = boards.map((board, index) => {
        return (
            <BoardBox boardId={board._id} name={board.name} description={board.description} index={index} />
                )
        })
    }

    return (
        <ForumContext.Provider 
            value={{
                loadingBoards,
                displayBoards,
                boards, // data
                selectedThreads, 
                setSelectedThreads,
                currentBoardName,
                setCurrentBoardName,
                currentBoardId,
                setCurrentBoardId
            }}>
            {props.children}
        </ForumContext.Provider>
    )
}