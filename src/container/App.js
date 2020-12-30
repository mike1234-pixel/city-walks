import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Home from '../components/pages/Home/Home'
import Cities from '../components/pages/Cities/Cities'
import Walks from '../components/pages/Walks/Walks'
import About from '../components/pages/About/About'
import Contact from '../components/pages/Contact/Contact'
import nf404 from '../components/pages/404/nf404'
import Footer from '../components/Footer/Footer'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'

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
    <BrowserRouter>
    <div>
      <Nav 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          redirect={redirect}  
          setRedirect={setRedirect}
          />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={() => <Cities handleClick={handleClick}/>} />
        <Route path="/walks" component={() => <Walks searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={nf404} />
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App