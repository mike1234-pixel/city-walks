import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Home from '../components/pages/Home/Home'
import Cities from '../components/pages/Cities/Cities'
import Walks from '../components/pages/Walks/Walks'
import About from '../components/pages/About/About'
import Contact from '../components/pages/Contact/Contact'
import nf404 from '../components/pages/404/nf404'
import Footer from '../components/Footer/Footer'
import { connect, useStore } from 'react-redux'
import { toggleNavbar } from '../actions/actionCreators'
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
// cities
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import data from '../components/pages/Cities/dummyData.json'


const App = (props) => {
  const store = useStore();
  const state = store.getState();

  // start global react state
  // pass searchValue, handleChange and handleSubmit as props through Nav to SearchBar
  const [searchValue, setSearchValue] = useState("")
  const [redirect, setRedirect] = useState(false)

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  // useHistory used in Nav component to redirect. 
  // redirect and setRedirect passed as props to Nav, to redirect then change redirect state back to false.
  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  const handleClick = (city) => {
    setSearchValue(city)
    setRedirect(true);
  }
  
  const cities = data.cities.map((city) => {
    return (
    <MDBCol style={{ maxWidth: "22rem" }}>
    <MDBCard className="city-card">
        <MDBCardImage className="cutter img-fluid" src={city.img_link}
        waves />
        <MDBCardBody>
        <MDBCardTitle>{city.city}</MDBCardTitle>
        <MDBCardText>{city.description}</MDBCardText>
        <MDBBtn className="city-card-btn" onClick={() => handleClick(city.city)}>Click</MDBBtn>
        </MDBCardBody>
    </MDBCard>
    </MDBCol>
    )
})


  return (
    <BrowserRouter>
    <div>
      <Nav 
          toggleNavbar={props.onClick} 
          navbarIsCollapsed={state.navbarIsCollapsed} 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          redirect={redirect}  
          setRedirect={setRedirect}
          />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={() => <Cities cities={cities} />} />
        <Route path="/walks" component={() => <Walks searchValue={searchValue}/>}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={nf404} />
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(toggleNavbar());
    },
  };
};
const mapStateToProps = (state) => ({
  navbarIsCollapsed: state.navbarIsCollapsed,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

