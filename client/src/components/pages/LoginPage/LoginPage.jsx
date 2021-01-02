import { useState, useEffect } from "react"
import { MDBBtn } from "mdbreact"
import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'

const LoginPage = (props) => {

    const [form, setForm] = useState("")

    const {
        firstName, 
        lastName, 
        registrationEmail, 
        registrationPassword, 
        handleChangeRegistration, 
        handleSubmitRegistration, 
        loggedIn
    } = props

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     console.log(form)
    //   }, []);

    return (
        <div className="user-portal" key="login-page">
            <h1>User Portal</h1>
            {loggedIn ? <h1>You are loggedin in</h1> : <h1>Register here</h1>}
            <MDBBtn outline color="info" onClick={() => setForm("loginForm")}>Login</MDBBtn>
            <MDBBtn outline color="info" onClick={() => setForm("registrationForm")}>Register</MDBBtn>
            <br/>
            <br/>
            <br/>
            {form === "registrationForm" ?     <RegistrationForm 
        firstName={firstName} 
        lastName={lastName} 
        registrationEmail={registrationEmail} 
        registrationPassword={registrationPassword} 
        handleChangeRegistration={handleChangeRegistration} 
        handleSubmitRegistration={handleSubmitRegistration}
    /> : <LoginForm/>}
        </div>
    
    )
}

export default LoginPage