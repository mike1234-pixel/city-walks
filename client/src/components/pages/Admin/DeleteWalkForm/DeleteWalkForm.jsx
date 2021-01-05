import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import './DeleteWalkForm.css'

const DeleteWalkForm = () => {

    const toTitleCase = (str) => {
        return str.replace(
          /\w\S*/g,
          (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }

    const [walk, setWalk] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "walk":
              setWalk(event.target.value)
              break;
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            walk: toTitleCase(walk)
          };

        axios
        .delete("http://localhost:5000/delete-walk",{ data: payload } )
        .then((err) => {
          if (err) {
            console.log(err);
          }
        });

        alert("Walk Deleted")
        setWalk("")
        window.scrollTo(0, 0);
    }

    return (
    <div>
        <h2>Delete Walk</h2>
        <form onSubmit={handleSubmit} className="add-city-form">
            <MDBInput type="text" name="walk" id="walk" value={walk} label="walk name" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Delete Walk <MDBIcon icon="trash"/>
          </MDBBtn>
        </form>
    </div>
    )
}

export default DeleteWalkForm