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
          <h2>Resend Verification Email to Activate Your Account</h2>
        </div>
          <form onSubmit={handleSubmitVerification} className="verification-form">
              <MDBInput key="input-5" type="email" name="verification-email" id="verification-email" value={verificationEmail} label="email" onChange={handleChangeVerification} required/>
              <MDBBtn outline color="elegant" type="submit">
                  Resend Email <MDBIcon far icon="paper-plane" />
            </MDBBtn>
          </form>
      </div>
    )
}

export default VerificationForm