import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import './LoginForm.css'

const LoginForm = (props) => {

    const {
      loginEmail, 
      loginPassword, 
      handleChangeLogin, 
      handleSubmitLogin} = props

    return (
    <div key="user-login">
      <div className="login-header-container">
        <h2>Login</h2>
      </div>
        <form onSubmit={handleSubmitLogin} className="add-city-form">
            <MDBInput key="input-5" type="email" name="login-email" id="login-email" value={loginEmail} label="email" onChange={handleChangeLogin} required/>
            <MDBInput key="input-6" type="password" name="login-password" id="login-password" value={loginPassword} label="password" onChange={handleChangeLogin} minLength="8" required/>
            <MDBBtn className="btn btn-outline-purple" type="submit">
                Login
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default LoginForm