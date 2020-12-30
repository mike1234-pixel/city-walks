import React, { useState } from 'react'
// import Nav from '../components/Nav/Nav'
// import Home from '../components/pages/Home/Home'
// import Cities from '../components/pages/Cities/Cities'
// import Walks from '../components/pages/Walks/Walks'
// import About from '../components/pages/About/About'
// import Contact from '../components/pages/Contact/Contact'
// import nf404 from '../components/pages/404/nf404'
// import Footer from '../components/Footer/Footer'
// import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
import Router from './Router/Router'

const App = () => {

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