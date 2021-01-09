/** @format */

import { useState, useEffect, useContext } from "react";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBHamburgerToggler,
  MDBCollapse,
} from "mdbreact";
import { LoginContext } from "../../../context/LoginContext";
import Boards from './LoggedInView/Boards';
import "./LoginPage.css";

const LoginPage = () => {
  const [toggleLoginPanel, setToggleLoginPanel] = useState(false);

  const handleToggleLoginPanel = () => {
    setToggleLoginPanel(!toggleLoginPanel);
  };

  const { loggedIn, userFirstName, logOut, displayForm, setForm } = useContext(LoginContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="user-portal min-page-height" key="login-page">
        {loggedIn ? (
          <div>
          <MDBNavbar className="login-panel" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text user-portal-logo">User Portal</strong>
              </MDBNavbarBrand>
              <MDBHamburgerToggler
                color="#fff"
                className="hamburger1"
                id="hamburger2"
                onClick={handleToggleLoginPanel}
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={toggleLoginPanel}
                navbar
              >
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={logOut}>
                      Logout <MDBIcon icon="key" />
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            <Boards/>
          </div>
        ) : (
          <div>
            <MDBNavbar className="login-panel" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text user-portal-logo">User Portal</strong>
              </MDBNavbarBrand>
              <MDBHamburgerToggler
                color="#fff"
                className="hamburger1"
                id="hamburger2"
                onClick={handleToggleLoginPanel}
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={toggleLoginPanel}
                navbar
              >
                <MDBNavbarNav justify>
                  <MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => setForm("loginForm")}>
                      Login <MDBIcon icon="key" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() => setForm("registrationForm")}
                    >
                      Register <MDBIcon far icon="edit" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() => setForm("verificationForm")}
                    >
                      Resend Account Verification Email <MDBIcon far icon="envelope" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() => setForm("resetPasswordForm")}
                    >
                      Reset Password <MDBIcon icon="unlock-alt" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() => setForm("forgotPasswordForm")}
                    >
                      Forgot Password <MDBIcon far icon="question-circle" />
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </div>
        )}
      <br />
      {displayForm}
    </div>
  );
};

export default LoginPage;
