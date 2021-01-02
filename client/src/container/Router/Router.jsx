import { useEffect, useState } from "react"
import Nav from '../../components/Nav/Nav'
import Home from '../../components/pages/Home/Home'
import Cities from '../../components/pages/Cities/Cities'
import Walks from '../../components/pages/Walks/Walks'
import About from '../../components/pages/About/About'
import Contact from '../../components/pages/Contact/Contact'
import LoginPage from '../../components/pages/LoginPage/LoginPage'
import Admin from '../../components/pages/Admin/Admin'
import NotFound404 from '../../components/pages/404/NotFound404'
import Footer from '../../components/Footer/Footer'
import Walk from '../../components/Walk/Walk'
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Router = (props) => {

    const {walks, cities, handleChange, handleSubmit, searchValue, redirect, setRedirect, handleClick, setSearchValue} = props
    
    const {
      firstName, 
      lastName, 
      registrationEmail, 
      registrationPassword, 
      handleChangeRegistration, 
      handleSubmitRegistration, 
      loggedIn
    } = props

    const [newRoutes, setNewRoutes] = useState("");

  useEffect(() => {

    const createRoutes = () => {
      let results = walks.map((walk, index) => (
        <Route
          exact
          path={`/${walk.route}`}
          key={index}
          render={() => <Walk walk={walk.walk} city={walk.city} description={walk.description} content1={walk.content1} content2={walk.content2} content3={walk.content3} img1={walk.img1} img2={walk.img2} img3={walk.img3}/>} // pass data as props to Walk
        />
      ));
      setNewRoutes(results);
    };
    createRoutes();
  }, [walks]); // only re-run the effect if data changes

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
            <Route path="/cities" component={() => <Cities handleClick={handleClick} cities={cities}/>} />
            <Route path="/walks" component={() => <Walks searchValue={searchValue} setSearchValue={setSearchValue} walks={walks}/>}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* the render method here ensures the inputs in the forms don't lose focus */}
            <Route path="/login" render={() => <LoginPage 
                            firstName={firstName} 
                            lastName={lastName} 
                            registrationEmail={registrationEmail} 
                            registrationPassword={registrationPassword} 
                            handleChangeRegistration={handleChangeRegistration} 
                            handleSubmitRegistration={handleSubmitRegistration} 
                            loggedIn={loggedIn}/>} 
                        />
            <Route path="/admin" component={Admin} />
            {newRoutes}
            <Route component={NotFound404} />
          </Switch>
          <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default Router