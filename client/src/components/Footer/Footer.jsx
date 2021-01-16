import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { LoginContext } from "../../context/LoginContext"
import axios from "axios"
import './Footer.css'

const Footer = () => {

  const { loggedIn, userId, logOut } = useContext(LoginContext)

  const deleteAccount = () => {

    const payload = {
      userId: userId,
    }

    axios.delete("http://localhost:5000/delete-account", {data: payload})
        .then((err) => {
            if (err) {
              console.log(err);
            }
          });
  
          alert("Account Deleted. You can sign up again at any time.")
          logOut()
          window.scrollTo(0, 0);
  }

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
            <ul className="footer-ul">
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
                <Link to="/blog">Blog</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/boards">User Login</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          <h5 className="title">Extra Links</h5>
          <ul className="footer-ul">
            <li className="list-unstyled">
                <Link to="/admin">Admin portal</Link>
            </li>
            <li className="list-unstyled">
                <Link to="/privacy">Privacy Policy</Link>
            </li>
            {loggedIn && 
            <li className="list-unstyled">
                <a onClick={deleteAccount}>Delete Account</a>
            </li>}
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