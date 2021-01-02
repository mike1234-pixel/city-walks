import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import qs from "qs";
import './AddCityForm.css'

const AddCityForm = () => {

    const [city, setCity] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "city":
              setCity(event.target.value)
              break;
            case "description":
              setDescription(event.target.value)
              break;
            case "img":
              setImg(event.target.value)
              break;
            default:
              console.log("other")
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            city: city,
            description: description,
            img: img
          };

        axios
        .post("http://localhost:5000/add-city", qs.stringify(payload))
        .then((err) => {
          if (err) {
            console.log(err);
          }
        });

        alert("City Submitted")
    }

    return (
    <div>
        <h2>Add City</h2>
        <form onSubmit={handleSubmit} className="add-city-form">
            <MDBInput type="text" name="city" id="city" value={city} label="city" onChange={handleChange}  maxLength="70" required/>
            <MDBInput type="text" name="description" id="description" value={description} label="description" onChange={handleChange} maxLength="136" required/>
            <MDBInput type="text" name="img" id="img" value={img} label="image link" onChange={handleChange} required/>
            <MDBBtn className="btn btn-outline-purple" type="submit">
                Send City
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default AddCityForm

// {
//     "id": "1",
//     "city": "london",
//     "description": "Capital of the UK",
//     "img_link": "https://images.pexels.com/photos/374815/pexels-photo-374815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// }