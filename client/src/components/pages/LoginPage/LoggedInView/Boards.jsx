import { useContext } from "react";
import { ForumContext } from "../../../../context/ForumContext"
import { LoginContext } from "../../../../context/LoginContext";

import './Boards.css'

const Boards = () => {

    // const { userFirstName } = useContext(LoginContext)
    const userFirstName = localStorage.getItem('userFirstName')
    const { loadingBoards, displayBoards } = useContext(ForumContext)

    return (
        <div>
            <div className="page-heading-container">
                <h1 className="page-heading">Forum</h1>
                <h2 className="login-heading">Welcome back {userFirstName}</h2>
                <p>Here you can join in the discussion and put forward your own recomendations. Discussions are subdivided by category:</p>
            </div>
                {loadingBoards ? 
                <p>Loading...</p> : 
                <div className="boards-container">
                    {displayBoards}
                </div>}
        </div>
    )
}


export default Boards

