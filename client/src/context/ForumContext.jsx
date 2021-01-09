import { createContext, useEffect, useState } from "react"
import axios from "axios"
import BoardBox from "../components/pages/LoginPage/LoggedInView/Components/BoardBox/BoardBox"

export const ForumContext = createContext();

export const ForumContextProvider = (props) => {
 
    const [loadingBoards, setLoadingBoards] = useState(true)
    const [boards, setBoards] = useState([])

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
            setLoadingBoards(false)
        }

    })}, []);

    if (!loadingBoards) {
    displayBoards = boards.map((board, index) => {
        return (
            <BoardBox name={board.name} description={board.description} key={index} />
                )
        })
    }

    return (
        <ForumContext.Provider 
            value={{
                loadingBoards,
                displayBoards
            }}>
            {props.children}
        </ForumContext.Provider>
    )
}