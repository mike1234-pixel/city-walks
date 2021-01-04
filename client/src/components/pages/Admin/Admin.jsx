import { useState, useEffect } from "react"
import { MDBBtn, MDBInput } from "mdbreact"
import axios from "axios"
import qs from "qs"
import AddWalkForm from './AddWalkForm/AddWalkForm'
import AddCityForm from './AddCityForm/AddCityForm'
import './Admin.css'

const Admin = () => {

    const [form, setForm] = useState("")

    let displayForm
    if (form === "addWalk") {      
        displayForm = <AddWalkForm/>;    
    } else if (form === "addCity") {      
        displayForm = <AddCityForm/>;
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
          } else {
            setAdminLoggedIn(true)
            setAdminUserName("")
            setAdminPassword("")
            window.scrollTo(0, 0)
          }
        });
  
        alert("Admin Login Complete")
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
            <h1>Admin Portal</h1>
            {adminLoggedIn ? 
            <div>
            <MDBBtn outline color="info" onClick={() => adminLogOut()}>Administrator Logout</MDBBtn>
            <MDBBtn outline color="info" onClick={() => setForm("addWalk")}>Add Walk</MDBBtn>
            <MDBBtn outline color="info" onClick={() => setForm("addCity")}>Add City</MDBBtn>
            <br/>
            <br/>
            <br/>
            {displayForm} 
            </div> : 
            <form onSubmit={handleSubmitAdminLogin}>
            <MDBInput type="text" name="admin-username" id="admin-username" value={adminUserName} label="admin username" onChange={handleChangeAdminLogin} maxLength="70" required/>
            <MDBInput type="password" name="admin-password" id="admin-password" value={adminPassword} label="admin password" onChange={handleChangeAdminLogin} maxLength="70" required/>
            <MDBBtn outline color="info" type="submit">Administrator Login</MDBBtn>
            </form>
            }

        </div>
    )
}

export default Admin