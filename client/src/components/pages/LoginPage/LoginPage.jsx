import { useState, useEffect } from "react"
import { MDBBtn } from "mdbreact"
import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import './LoginPage.css'

const LoginPage = (props) => {

    const [form, setForm] = useState("")

    const {
        firstName, 
        lastName, 
        registrationEmail, 
        registrationPassword, 
        handleChangeRegistration, 
        handleSubmitRegistration, 
        loggedIn,
        loginEmail,
        loginPassword,
        handleChangeLogin,
        handleSubmitLogin,
        userFirstName,
        logOut
    } = props

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="user-portal" key="login-page">
        <div className="user-portal-header-btns-container">
            <h1>User Portal</h1>
            {loggedIn ? <h1>Welcome back {userFirstName}</h1> : <h1>Login or Register</h1>}
            {loggedIn ? 
            <MDBBtn outline color="info" onClick={logOut}>Log Out</MDBBtn> : 
            <div>
                <MDBBtn outline color="info" onClick={() => setForm("loginForm")}>Login</MDBBtn>
                <MDBBtn outline color="info" onClick={() => setForm("registrationForm")}>Register</MDBBtn>
            </div>
            }
        </div>
            <br/>
            <br/>
            <br/>
            {form === "registrationForm" ?     
            <RegistrationForm 
                firstName={firstName} 
                lastName={lastName} 
                registrationEmail={registrationEmail} 
                registrationPassword={registrationPassword} 
                handleChangeRegistration={handleChangeRegistration} 
                handleSubmitRegistration={handleSubmitRegistration}
            /> : <LoginForm
                loginEmail={loginEmail}
                loginPassword={loginPassword}
                handleChangeLogin={handleChangeLogin}
                handleSubmitLogin={handleSubmitLogin}
            />}
        </div>
    
    )
}

export default LoginPage