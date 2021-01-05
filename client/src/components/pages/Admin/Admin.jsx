import { useState, useEffect } from "react"
import { MDBBtn, MDBInput, MDBIcon } from "mdbreact"
import axios from "axios"
import qs from "qs"
import AddWalkForm from './AddWalkForm/AddWalkForm'
import AddCityForm from './AddCityForm/AddCityForm'
import SetFeaturedWalkForm from './SetFeaturedWalkForm/SetFeaturedWalkForm'
import DeleteWalkForm from './DeleteWalkForm/DeleteWalkForm'
import './Admin.css'

const Admin = () => {

    const [form, setForm] = useState("")

    let displayForm
    if (form === "addWalk") {      
        displayForm = <AddWalkForm/>;    
    } else if (form === "addCity") {      
        displayForm = <AddCityForm/>;
    } else if (form === "setFeaturedWalk") {
        displayForm = <SetFeaturedWalkForm/>
    } else if (form === "deleteWalk") {
        displayForm = <DeleteWalkForm/>
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      });
    
    const [adminUserName, setAdminUserName] = useState("")
    const [adminPassword, setAdminPassword] = useState("")
    const [adminLoggedIn, setAdminLoggedIn] = useState(false)

    const handleSubmitAdminLogin = (event) => {
        event.preventDefault()
  
        const payload = {
            username: adminUserName,
            password: adminPassword,
          };
  
    axios
        .post("http://localhost:5000/admin-login", qs.stringify(payload))
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else if (res.data === "unsuccessful login attempt") {
            alert("Unsuccessful Login Attempt. Please Try Again.")
          } else {
            alert("Successfully Logged In")
            setAdminLoggedIn(true)
            setAdminUserName("")
            setAdminPassword("")
            window.scrollTo(0, 0)
          }
        });

    }

    const handleChangeAdminLogin = (event) => {
        switch(event.target.name) {
            case "admin-username":
              setAdminUserName(event.target.value)
              break;
            case "admin-password":
              setAdminPassword(event.target.value)
              break;
        }
    }

    const adminLogOut = () => {
        setAdminLoggedIn(false)
    }

    return (
        <div className="admin-portal">
          <div className="page-heading-container">
            <h1 className="page-heading">Admin Portal</h1>
          </div>
            {adminLoggedIn ? 
            <div>
            <MDBBtn outline color="elegant" onClick={() => adminLogOut()}>Administrator Logout</MDBBtn>
            <MDBBtn outline color="elegant" onClick={() => setForm("addWalk")}>Add Walk</MDBBtn>
            <MDBBtn outline color="elegant" onClick={() => setForm("addCity")}>Add City</MDBBtn>
            <MDBBtn outline color="elegant" onClick={() => setForm("setFeaturedWalk")}>Set Featured Walk</MDBBtn>
            <MDBBtn outline color="elegant" onClick={() => setForm("deleteWalk")}>Delete Walk</MDBBtn>
            <br/>
            <br/>
            <br/>
            {displayForm} 
            </div> : 
            <form className="admin-login-form" onSubmit={handleSubmitAdminLogin}>
            <MDBInput type="text" name="admin-username" id="admin-username" value={adminUserName} label="admin username" onChange={handleChangeAdminLogin} maxLength="70" required/>
            <MDBInput type="password" name="admin-password" id="admin-password" value={adminPassword} label="admin password" onChange={handleChangeAdminLogin} maxLength="70" required/>
            <MDBBtn outline color="elegant" type="submit">Administrator Login <MDBIcon icon="sign-in-alt" /></MDBBtn>
            </form>
            }

        </div>
    )
}

export default Admin