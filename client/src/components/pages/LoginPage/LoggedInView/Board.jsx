import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import axios from "axios"
import BoardBox from "./Components/BoardBox/BoardBox"

const Board = () => {

    const { userFirstName } = useContext(LoginContext)

    const [loading, setLoading] = useState(true)
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
            setBoards(res.data)
            setLoading(false)
        }
    })}, []);

    if (!loading) {
    displayBoards = boards.map((board, index) => {
        return (
            <BoardBox name={board.name} description={board.description} key={index}/>
                )
        })
    }

    return (
        <div>
            <div className="page-heading-container">
                <h1 className="page-heading">Board</h1>
                <h2 className="login-heading">Welcome back {userFirstName}</h2>
            </div>
                {loading ? 
                <p>Loading...</p> : 
                <div className="boards-container">
                    {displayBoards}
                </div>}
        </div>
    )
}


export default Board

