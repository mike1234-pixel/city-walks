import React from 'react'
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
import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = (props) => {
  const store = useStore();
  const state = store.getState();

  return (
    <BrowserRouter>
    <div>
      <Nav toggleNavbar={props.onClick} navbarIsCollapsed={state.navbarIsCollapsed} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/walks" component={Walks} />
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

