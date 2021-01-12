/** @format */

import { useState, useEffect, useContext } from "react";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBHamburgerToggler,
  MDBCollapse,
} from "mdbreact";
import { LoginContext } from "../../../context/LoginContext";
import "./LoginPage.css";

const LoginPage = () => {
  const [toggleLoginPanel, setToggleLoginPanel] = useState(false);

  const handleToggleLoginPanel = () => {
    setToggleLoginPanel(!toggleLoginPanel);
  };

  const { logOut, displayForm, setForm, loggedIn } = useContext(LoginContext);

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
                    <a className="user-portal-link" onClick={logOut}>
                      Logout <MDBIcon icon="key" />
                    </a>
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
                    <a className="user-portal-link" onClick={() => setForm("loginForm")}>
                      Login <MDBIcon icon="key" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className="user-portal-link"
                      onClick={() => setForm("registrationForm")}
                    >
                      Register <MDBIcon far icon="edit" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className="user-portal-link"
                      onClick={() => setForm("verificationForm")}
                    >
                      Resend Account Verification Email <MDBIcon far icon="envelope" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className="user-portal-link"
                      onClick={() => setForm("resetPasswordForm")}
                    >
                      Reset Password <MDBIcon icon="unlock-alt" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className="user-portal-link"
                      onClick={() => setForm("forgotPasswordForm")}
                    >
                      Forgot Password <MDBIcon far icon="question-circle" />
                    </a>
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
