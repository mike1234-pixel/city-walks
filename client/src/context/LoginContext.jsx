import { createContext, useState } from "react"
import axios from "axios"
import qs from "qs"

export const LoginContext = createContext();

export const LoginContextProvider = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [registrationEmail, setRegistrationEmail] = useState("")
    const [registrationPassword, setRegistrationPassword] = useState("")
  
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
  
    const [loggedIn, setLoggedIn] = useState(false)
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
  
    const [verificationEmail, setVerificationEmail] = useState("")

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")

    const handleChangeRegistration = (event) => {
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
          } 
    }
  
    const handleSubmitRegistration = (event) => {
      console.log("handle submit triggered")
        event.preventDefault()
  
        const payload = {
            fname: firstName,
            lname: lastName,
            email: registrationEmail,
            password: registrationPassword,
          };
  
    axios
        .post("http://localhost:5000/register-user", qs.stringify(payload))
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else if (res.data === "An account with this email already exists.") {
            alert("An account with this email already exists.")
          } else if (res.data === "We have sent you an email. Please verify your account by clicking the link in the mail.") {
            alert("We have sent you an email. Please verify your account by clicking the link in the email. (This code expires after 10 minutes)")
           } else {
            alert("Registration Complete")
            setLoggedIn(true)
            setFirstName("")
            setLastName("")
            setRegistrationEmail("")
            setRegistrationPassword("")
            setUserFirstName(res.data.fname)
            setUserLastName(res.data.lname)
            window.scrollTo(0, 0)
          }
        });
    }
  
    const handleChangeLogin = (event) => {
      switch(event.target.name) {
          case "login-email":
            setLoginEmail(event.target.value)
            break;
          case "login-password":
            setLoginPassword(event.target.value)
            break;
        } 
  }
  
  const handleSubmitLogin = (event) => {
    console.log("handle submit login triggered")
      event.preventDefault()
  
      const payload = {
          email: loginEmail,
          password: loginPassword
        };
  
  axios
      .post("http://localhost:5000/login-user", qs.stringify(payload))
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else if (res.data === "Your account exists but is not activated. Please click 'verify account' for email verification.") {
          alert("Your account exists but is not activated. Please click 'verify account' for email verification.")
        } else if (res.data === "unsuccessful login attempt") {
          alert("Unsuccessful Login Attempt. Please Try Again.")
        } else {
          alert("Login Complete")
          setLoggedIn(true)
          setLoginEmail("")
          setLoginPassword("")
          setUserFirstName(res.data.fname)
          setUserLastName(res.data.lname)
          window.scrollTo(0, 0)
        }
      });
  }

  // resend verification email

  const handleChangeVerification = (event) => {
    switch(event.target.name) {
        case "verification-email":
          setVerificationEmail(event.target.value)
          break;
      }   
  }

const handleSubmitVerification = (event) => {
    console.log("handle submit verification")
    event.preventDefault()

    const payload = {
        email: verificationEmail,
      };

axios
    .post("http://localhost:5000/reverify-user", qs.stringify(payload))
    .then((res, err) => {
      if (err) {
        console.log(err);
      } else {
        alert("Verification email sent. Check your inbox.")
        setVerificationEmail("")
        window.scrollTo(0, 0)
      }
    })
}

  // forgot password

  const handleChangeForgotPassword = (event) => {
    switch(event.target.name) {
        case "forgot-password-email":
          setForgotPasswordEmail(event.target.value)
          break;
      }   
  }

const handleSubmitForgotPassword = (event) => {
    console.log("handle submit forgot password")
    event.preventDefault()

    const payload = {
        email: forgotPasswordEmail,
      };

axios
    .post("http://localhost:5000/forgot-password", qs.stringify(payload))
    .then((res, err) => {
      if (err) {
        console.log(err);
      } else {
        alert("We have sent you an email. Please click the click in your email to reset your password")
        setForgotPasswordEmail("")
        window.scrollTo(0, 0)
      }
    })
}
  
  const logOut = () => {
    setLoggedIn(false)
    setUserFirstName("")
    setUserLastName("")
  }

    return (
        <LoginContext.Provider 
            value={{
                firstName: firstName,
                lastName: lastName,
                registrationEmail: registrationEmail,
                registrationPassword: registrationPassword,
                handleChangeRegistration: handleChangeRegistration,
                handleSubmitRegistration: handleSubmitRegistration,
                loggedIn: loggedIn,
                // login state and functions
                loginEmail: loginEmail,
                loginPassword: loginPassword,
                handleChangeLogin: handleChangeLogin,
                handleSubmitLogin: handleSubmitLogin,
                // logged in user data
                userFirstName: userFirstName,
                userLastName: userLastName,
                // resend verification email
                verificationEmail: verificationEmail,
                handleChangeVerification: handleChangeVerification,
                handleSubmitVerification: handleSubmitVerification,
                // forgot password
                forgotPasswordEmail: forgotPasswordEmail,
                handleChangeForgotPassword: handleChangeForgotPassword,
                handleSubmitForgotPassword: handleSubmitForgotPassword,
                // logout function
                logOut: logOut
            }}
        >
            {props.children}
        </LoginContext.Provider>
    )
}