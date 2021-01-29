import { useContext } from "react";
import { ForumContext } from "../../../../context/ForumContext"
import { LoginContext } from "../../../../context/LoginContext";
import PopUp from "../../../../components/PopUp/PopUp"
import './Boards.css'

const Boards = () => {

    const { userFirstName } = useContext(LoginContext)
    const { loadingBoards, displayBoards } = useContext(ForumContext)

    const { popupVisible } = useContext(LoginContext)

    return (
        <div>
            {popupVisible && <PopUp/>}
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

