import { useState, useEffect } from "react"
import { MDBBtn } from "mdbreact"
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

    return (
        <div className="admin-portal">
            <h1>Admin Portal</h1>
            <MDBBtn outline color="info" onClick={() => setForm("addWalk")}>Add Walk</MDBBtn>
            <MDBBtn outline color="info" onClick={() => setForm("addCity")}>Add City</MDBBtn>
            <br/>
            <br/>
            <br/>
            {displayForm}
        </div>
    )
}

export default Admin