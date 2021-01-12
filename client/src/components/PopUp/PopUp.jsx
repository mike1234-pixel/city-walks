import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import "./PopUp.css"

const PopUp = () => {

    const { handlePopup } = useContext(LoginContext)

    return (
        <div className="popup">
            <p>To make City Walks work, we log user data. By using City Walks, you agree to our Privacy Policy, including cookie policy.</p>
            <btn onClick={handlePopup}>Accept</btn>
        </div>
    )
}

export default PopUp