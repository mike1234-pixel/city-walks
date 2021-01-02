import { useState, useEffect } from "react"
import { MDBBtn } from "mdbreact"
import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'

const LoginPage = () => {

    const [form, setForm] = useState("")

    let displayForm
    if (form === "loginForm") {      
        displayForm = <LoginForm/>;    
    } else if (form === "registrationForm") {      
        displayForm = <RegistrationForm/>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return (
        <div className="user-portal">
            <h1>Admin Portal</h1>
            <MDBBtn outline color="info" onClick={() => setForm("loginForm")}>Login</MDBBtn>
            <MDBBtn outline color="info" onClick={() => setForm("registrationForm")}>Register</MDBBtn>
            <br/>
            <br/>
            <br/>
            {displayForm}
        </div>
    )
}

export default LoginPage