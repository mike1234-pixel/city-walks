import { useState, useEffect, useContext } from "react"
import { useHistory } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBHamburgerToggler, MDBCollapse, MDBContainer, MDBInput } from "mdbreact"
import { SearchContext } from '../../context/SearchContext';
import './Nav.css'

const Nav = () => {

  const [toggleNav, setToggleNav] = useState(false)

  const { redirect, setRedirect } = useContext(SearchContext)

  let history = useHistory()

  // wrapping this in useEffect prevents error: "cannot update a component while rendering a different component"
  useEffect(() => {
    if (redirect) {
      history.push("/walks")
      setRedirect(false)
    }
  })

  const handleClick = () => {
    setToggleNav(!toggleNav)
  }

  return (
      <MDBContainer className="nav-container">
        <MDBNavbar className="nav-bar" dark expand="md">
          <MDBNavbarBrand>
            <b className="white-text"><MDBNavLink className="white-text logo" to="/">City Walks</MDBNavLink></b>
          </MDBNavbarBrand>
          <MDBHamburgerToggler color="#fff" className="hamburger1" id="hamburger1" onClick={handleClick} />
          <MDBCollapse id="navbarCollapse3" isOpen={toggleNav} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink className="white-text" to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink data-testid="nav-link-cities" className="white-text" to="/cities">Cities</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="white-text" to="/walks">Walks</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="white-text" to="/blog">Blog</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="white-text" to="/boards">Forum</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="white-text" to="/about">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="white-text" to="/contact">Contact</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <SearchBar/>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    )
  }

export default Nav