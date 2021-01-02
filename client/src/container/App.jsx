import React, { useState } from 'react'
import './App.css'
import Router from './Router/Router'
import axios from "axios"
import qs from "qs"


const App = (props) => {

  const {walks, cities} = props

  // global state
  const [searchValue, setSearchValue] = useState("")
  const [redirect, setRedirect] = useState(false)

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  const handleClick = (city) => {
    setSearchValue(city)
    setRedirect(true);
  }

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [registrationEmail, setRegistrationEmail] = useState("")
  const [registrationPassword, setRegistrationPassword] = useState("")

  // REGISTRATION
  const [loggedIn, setLoggedIn] = useState(false)

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
        } else {
          console.log(res)
          console.log("USER REGISTERED")
          setLoggedIn(true)
        }
      });

      alert("Registration Complete")
  }

  return (
    <Router 
      // core app data
      walks={walks} 
      cities={cities} 
      // core app functions
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      searchValue={searchValue} 
      redirect={redirect} 
      setRedirect={setRedirect} 
      handleClick={handleClick} 
      setSearchValue={setSearchValue}
      // registration state and functions
      firstName={firstName}
      lastName={lastName}
      registrationEmail={registrationEmail}
      registrationPassword={registrationPassword}
      handleChangeRegistration={handleChangeRegistration}
      handleSubmitRegistration={handleSubmitRegistration}
      loggedIn={loggedIn}
      />
  )

}

export default App