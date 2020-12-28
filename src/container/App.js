import React from 'react'
import Nav from '../components/Nav/Nav'
import { connect, useStore } from "react-redux";
import { toggleNavbar } from "../actions/actionCreators";

const App = (props) => {
  const store = useStore();
  const state = store.getState();

  return (
    <div>
      <Nav toggleNavbar={props.onClick} navbarIsCollapsed={state.navbarIsCollapsed}/>
      <h1>Hello World</h1>
    </div>
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

