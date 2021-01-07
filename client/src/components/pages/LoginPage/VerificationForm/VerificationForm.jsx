import { useContext } from 'react'
import { LoginContext } from '../../../../context/LoginContext'
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import './VerificationForm.css'

const VerificationForm = () => {

    const {
        verificationEmail, 
        handleChangeVerification, 
        handleSubmitVerification
    } = useContext(LoginContext)

    return (
        <div key="user-verification">
        <div className="verification-header-container">
          <h2 className="verification-header">Activate Your Account</h2>
          <p>Submit your email address to resend the verification email to activate your account.</p>
          <p>You must activate your account within 10 minutes of receiving the email.</p>
          <p>If the email link expires then submit your email address again to receive a fresh activation link.</p>
        </div>
          <form onSubmit={handleSubmitVerification} className="verification-form display-form">
              <MDBInput key="input-5" type="email" name="verification-email" id="verification-email" value={verificationEmail} label="email" onChange={handleChangeVerification} required/>
              <MDBBtn outline color="elegant" type="submit">
                  Resend Email <MDBIcon far icon="paper-plane" />
            </MDBBtn>
          </form>
      </div>
    )
}

export default VerificationForm