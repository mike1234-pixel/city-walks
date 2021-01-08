import { useContext, useEffect } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import BoardBox from "./Components/BoardBox/BoardBox"

const LoggedInView = () => {

    // useeffect here fetch the boards data

    // q: do i set the boards or do the users?

    // a: i set the boards/topics to organise the threads.
    // 1)
    // create a boards model 

    // create the ability in the amdin panel to add a new board

    const { userFirstName } = useContext(LoginContext)

    return (
        <div>
            <p>Logged In View</p>
            <h2 className="login-heading">Welcome back {userFirstName}</h2>

        </div>
    )
}

export default LoggedInView

