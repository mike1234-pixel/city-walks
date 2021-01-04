import { useContext } from 'react'
import { LoginContext } from '../../../../context/LoginContext'
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import './RegistrationForm.css'

const RegistrationForm = () => {

  const {
        firstName, 
        lastName, 
        registrationEmail, 
        registrationPassword, 
        handleChangeRegistration,
        handleSubmitRegistration
    } = useContext(LoginContext)


    return (
    <div key="user-registration">
      <div className="registration-header-container">
        <h2>Register</h2>
      </div>
        <form onSubmit={handleSubmitRegistration} className="add-city-form" key="user-registration-form">
            <MDBInput key="input-1" type="text" name="registration-fname" id="registration-fname" value={firstName} label="first Name" onChange={handleChangeRegistration} pattern="^[A-Za-z\-]+$" required/>
            <MDBInput key="input-2" type="text" name="registration-lname" id="registration-lname" value={lastName} label="last Name" onChange={handleChangeRegistration} pattern="^[A-Za-z\-]+$" required/>
            <MDBInput key="input-3" type="email" name="registration-email" id="registration-email" value={registrationEmail} label="email" onChange={handleChangeRegistration} required/>
            <MDBInput key="input-4" type="password" name="registration-password" id="registration-password" value={registrationPassword} label="password (minimum 8 characters)" onChange={handleChangeRegistration} minLength="8" required/>
            <MDBBtn outline color="elegant" type="submit">
                Register <MDBIcon icon="sign-in-alt" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default RegistrationForm