import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import qs from "qs";
import './RegistrationForm.css'

const RegistrationForm = () => {
    const [registrationEmail, setRegistrationEmail] = useState("")
    const [registrationPassword, setRegistrationPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "registration-fname":
              setFirstName(event.target.value)
              break;
            case "registration-lname":
              setLastName(event.target.value)
              break;
            case "registration-email":
              setRegistrationEmail(event.target.value)
              break;
            case "registration-password":
              setRegistrationPassword(event.target.value)
              break;
            default:
              console.log("other")
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            fname: firstName,
            lname: lastName,
            email: registrationEmail,
            password: registrationPassword,
          };

    axios
        .post("http://localhost:5000/register-user", qs.stringify(payload))
        .then((res, err) => {
          if (res, err) {
            console.log(err);
          } else {
            console.log(res)
          }
        });

        alert("Registraion Complete")
    }

    return (
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="add-city-form">
            <MDBInput type="text" name="registration-fname" id="registration-fname" value={firstName} label="First Name" onChange={handleChange} pattern="^[A-Za-z\-]+$" required/>
            <MDBInput type="text" name="registration-lname" id="registration-lname" value={lastName} label="Last Name" onChange={handleChange} pattern="^[A-Za-z\-]+$" required/>
            <MDBInput type="email" name="registration-email" id="registration-email" value={registrationEmail} label="email" onChange={handleChange} required/>
            <MDBInput type="password" name="registration-password" id="registration-password" value={registrationPassword} label="password" onChange={handleChange} required/>
            <MDBBtn className="btn btn-outline-purple" type="submit">
                Register
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default RegistrationForm