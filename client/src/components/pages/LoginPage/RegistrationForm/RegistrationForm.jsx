import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import './RegistrationForm.css'

const RegistrationForm = (props) => {

    const {
        firstName, 
        lastName, 
        registrationEmail, 
        registrationPassword, 
        handleChangeRegistration,
        handleSubmitRegistration
    } = props

    return (
    <div key="user-registration">
        <h2>Register</h2>
        <form onSubmit={handleSubmitRegistration} className="add-city-form" key="user-registration-form">
            <MDBInput key="input-1" type="text" name="registration-fname" id="registration-fname" value={firstName} label="First Name" onChange={handleChangeRegistration} pattern="^[A-Za-z\-]+$" required/>
            <MDBInput key="input-2" type="text" name="registration-lname" id="registration-lname" value={lastName} label="Last Name" onChange={handleChangeRegistration} pattern="^[A-Za-z\-]+$" required/>
            <MDBInput key="input-3" type="email" name="registration-email" id="registration-email" value={registrationEmail} label="Email" onChange={handleChangeRegistration} required/>
            <MDBInput key="input-4" type="password" name="registration-password" id="registration-password" value={registrationPassword} label="Password (minimum 8 characters)" onChange={handleChangeRegistration} minLengh="8" required/>
            <MDBBtn className="btn btn-outline-purple" type="submit">
                Register
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default RegistrationForm