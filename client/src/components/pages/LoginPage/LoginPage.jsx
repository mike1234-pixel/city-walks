/** @format */

import { useState, useEffect, useContext } from "react";
import {
  MDBBtn,
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

  const { logOut, displayForm, setForm, loggedIn, userFirstName } = useContext(LoginContext);

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
                    <MDBBtn outline color="elegant" onClick={logOut}>
                      Logout <MDBIcon icon="key" />
                    </MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
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
                <MDBNavbarNav justify="true">
                  <MDBNavItem>
                    <MDBBtn outline color="elegant" onClick={() => setForm("loginForm")}>
                      Login <MDBIcon icon="key" />
                    </MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn outline color="elegant"
                      onClick={() => setForm("registrationForm")}
                    >
                      Register <MDBIcon far icon="edit" />
                    </MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn outline color="elegant"
                      onClick={() => setForm("verificationForm")}
                    >
                      Resend Account Verification Email <MDBIcon far icon="envelope" />
                    </MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn outline color="elegant"
                      onClick={() => setForm("resetPasswordForm")}
                    >
                      Reset Password <MDBIcon icon="unlock-alt" />
                    </MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn outline color="elegant"
                      onClick={() => setForm("forgotPasswordForm")}
                    >
                      Forgot Password <MDBIcon far icon="question-circle" />
                    </MDBBtn>
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
