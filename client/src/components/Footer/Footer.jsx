import React from 'react'
import { Link } from "react-router-dom"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import './Footer.css'

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">City Walks is...</h5>
            <p>
              (City Walks description)
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Site Links</h5>
            <ul>
            <li className="list-unstyled">
                <Link to="/">Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/cities">Cities</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/walks">Walks</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/about">About</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/login">User Login</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/admin">Admin portal</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          <h5 className="title">External Links</h5>
          <ul>
          <li className="list-unstyled">
                <Link to="/login">User Login</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/admin">Admin portal</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;