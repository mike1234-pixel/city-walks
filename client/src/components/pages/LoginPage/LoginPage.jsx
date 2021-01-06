import { useState, useEffect, useContext } from "react"
import { MDBBtn, MDBIcon } from "mdbreact"
import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import VerificationForm from './VerificationForm/VerificationForm'
import { LoginContext } from '../../../context/LoginContext'
import './LoginPage.css'

const LoginPage = () => {

    const [form, setForm] = useState("")

    const {
        loggedIn,
        userFirstName,
        logOut
    } = useContext(LoginContext)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    let displayForm
    if (form === "loginForm") {      
        displayForm = <LoginForm/>;    
    } else if (form === "registrationForm") {      
        displayForm = <RegistrationForm/>;
    } else if (form === "verificationForm") {
        displayForm = <VerificationForm/>
    } 

    return (
        <div className="user-portal" key="login-page">
        <div className="user-portal-header-btns-container">
          <div className="page-heading-container">
            <h1 className="page-heading">User Portal</h1>
          </div>
            {loggedIn ? <h2 className="login-heading">Welcome back {userFirstName}</h2> : <h2 className="login-heading">Login or Register</h2>}
            {loggedIn ? 
            <MDBBtn outline color="elegant" onClick={logOut}>Log Out <MDBIcon icon="sign-out-alt" /></MDBBtn> : 
            <div>
                <MDBBtn outline color="elegant" onClick={() => setForm("loginForm")}>Login</MDBBtn>
                <MDBBtn outline color="elegant" onClick={() => setForm("registrationForm")}>Register</MDBBtn>
                <MDBBtn outline color="elegant" onClick={() => setForm("verificationForm")}>Activate Account</MDBBtn>
            </div>
            }
        </div>
            <br/>
            <br/>
            <br/>
            {displayForm}
        </div>
    
    )
}

export default LoginPage