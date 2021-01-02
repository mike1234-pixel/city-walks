import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import qs from "qs";
import './LoginForm.css'

const LoginForm = () => {

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "login-email":
              setLoginEmail(event.target.value)
              break;
            case "login-password":
              setLoginPassword(event.target.value)
              break;
            default:
              console.log("other")
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const payload = {
            email: loginEmail,
            password: loginPassword,
          };

    //     axios
    //     .post("http://localhost:5000/add-city", qs.stringify(payload))
    //     .then((err) => {
    //       if (err) {
    //         console.log(err);
    //       }
    //     });

    //     alert("City Submitted")
    }

    return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="add-city-form">
            <MDBInput type="email" name="login-email" id="login-email" value={loginEmail} label="email" onChange={handleChange} required/>
            <MDBInput type="password" name="login-password" id="login-password" value={loginPassword} label="password" onChange={handleChange} required/>
            <MDBBtn className="btn btn-outline-purple" type="submit">
                Login
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default LoginForm