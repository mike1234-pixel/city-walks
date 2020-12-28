import React from "react"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBHamburgerToggler, MDBCollapse, MDBContainer, MDBInput } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {

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
                <MDBNavLink className="black-text" to="#!">Pricing</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="#!">Pricing</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBInput label="Search"/> 
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    )
  }

export default Nav