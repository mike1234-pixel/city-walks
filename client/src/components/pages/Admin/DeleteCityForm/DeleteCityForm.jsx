import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios"
import toTitleCase from '../../../../functions/toTitleCase'
import './DeleteCityForm.css'

const DeleteCityForm = () => {

    const [city, setCity] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "city":
              setCity(event.target.value)
              break;
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            city: toTitleCase(city)
          };

        axios
        .delete("http://localhost:5000/delete-city",{ data: payload } )
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else if (res.data === "city deleted") {
            console.log("city deleted")
          } else {
            console.log("city not deleted")
          }
        });

        alert("City Deleted")
        setCity("")
        window.scrollTo(0, 0);
    }

    return (
    <div>
        <h2>Delete City</h2>
        <form onSubmit={handleSubmit} className="delete-city-form">
            <MDBInput type="text" name="city" id="city" value={city} label="city name" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Delete City <MDBIcon icon="trash"/>
          </MDBBtn>
        </form>
    </div>
    )
}

export default DeleteCityForm