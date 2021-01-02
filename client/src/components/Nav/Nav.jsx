import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBHamburgerToggler, MDBCollapse, MDBContainer, MDBInput } from "mdbreact"
import './Nav.css'

const Nav = (props) => {

  const [toggleNav, setToggleNav] = useState(false)

  let history = useHistory()

  // wrapping this in useEffect prevents error: "cannot update a component while rendering a different component"
  useEffect(() => {
    if (props.redirect) {
      history.push("/walks")
      props.setRedirect(false)
    }
  })

  const handleClick = () => {
    setToggleNav(!toggleNav)
  }

  return (
      <MDBContainer className="nav-container">
        <MDBNavbar className="nav-bar" dark expand="md">
          <MDBNavbarBrand>
            <b className="black-text"><MDBNavLink className="black-text" to="/">City Walks</MDBNavLink></b>
          </MDBNavbarBrand>
          <MDBHamburgerToggler color="#000" className="hamburger1" id="hamburger1" onClick={handleClick} />
          <MDBCollapse id="navbarCollapse3" isOpen={toggleNav} navbar>
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
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/login">Login</MDBNavLink>
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