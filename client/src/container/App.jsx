import React, { useState } from 'react'
import './App.css'
import Router from './Router/Router'
import axios from "axios"


const App = (props) => {

  const {walks} = props

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
  return (
    <Router walks={walks} handleChange={handleChange} handleSubmit={handleSubmit} searchValue={searchValue} redirect={redirect} setRedirect={setRedirect} handleClick={handleClick} setSearchValue={setSearchValue}/>
  )

}

export default App