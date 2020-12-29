import { useState } from "react"
import SearchBar from '../SearchBar/SearchBar'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBHamburgerToggler, MDBCollapse, MDBContainer, MDBInput } from "mdbreact";
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {

  let history = useHistory()

  if (props.redirect) {
    history.push("/walks")
    props.setRedirect(false)
  }

  return (
      <MDBContainer className="nav-container">
        <MDBNavbar className="nav-bar" dark expand="md">
          <MDBNavbarBrand>
            <b className="black-text"><MDBNavLink className="black-text" to="/">City Walks</MDBNavLink></b>
          </MDBNavbarBrand>
          {/* <MDBNavbarToggler onClick={props.toggleNavbar} /> */}
          <MDBHamburgerToggler color="#000" className="hamburger1" id="hamburger1" onClick={props.toggleNavbar} />
          <MDBCollapse id="navbarCollapse3" isOpen={props.navbarIsCollapsed} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/cities">Cities</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/walks">Walks</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/about">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/contact">Contact</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <SearchBar
                    handleChange={props.handleChange}
                    handleSubmit={props.handleSubmit}
                    searchValue={props.searchValue}  
                />
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    )
  }

export default Nav