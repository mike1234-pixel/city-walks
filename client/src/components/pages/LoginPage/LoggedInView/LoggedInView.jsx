import { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";

const LoggedInView = () => {

    const { userFirstName } = useContext(LoginContext)

    return (
        <div>
            <p>Logged In View</p>
            <h2 className="login-heading">Welcome back {userFirstName}</h2>
        </div>
    )
}

export default LoggedInView