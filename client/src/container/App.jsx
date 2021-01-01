import React, { useState } from 'react'
import './App.css'
import Router from './Router/Router'

const App = () => {

  // https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

  // GLOBAL STATE 
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
  return (
    <Router handleChange={handleChange} handleSubmit={handleSubmit} searchValue={searchValue} redirect={redirect} setRedirect={setRedirect} handleClick={handleClick} setSearchValue={setSearchValue}/>
  )
}

export default App