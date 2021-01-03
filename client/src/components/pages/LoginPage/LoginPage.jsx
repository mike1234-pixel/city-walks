import { useState, useEffect, useContext } from "react"
import { MDBBtn } from "mdbreact"
import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'
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
            <RegistrationForm /> : <LoginForm />}
        </div>
    
    )
}

export default LoginPage