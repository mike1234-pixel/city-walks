import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { MDBBtn } from "mdbreact"
import { Link } from "react-router-dom"
import "./PopUp.css"

const PopUp = () => {

    const { handlePopup } = useContext(LoginContext)

    return (
        <div className="popup-container-cookies">
            <div className="popup-cookies">
                <p>To make City Walks work, we log user data. By using City Walks, you agree to our <Link to="/privacy">Privacy Policy</Link>, including cookie policy.</p>
                <MDBBtn onClick={handlePopup}>Accept</MDBBtn>
            </div>
        </div>
    )
}

export default PopUp