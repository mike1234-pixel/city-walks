import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios"
import toTitleCase from '../../../../functions/toTitleCase'
import './DeleteWalkForm.css'

const DeleteWalkForm = () => {

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
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else if (res.data === "walk deleted") {
            console.log("walk deleted")
          } else {
            console.log("walk not deleted")
          }
        });

        alert("Walk Deleted")
        setWalk("")
        window.scrollTo(0, 0);
    }

    return (
    <div>
        <h2>Delete Walk</h2>
        <form onSubmit={handleSubmit} className="delete-walk-form">
            <MDBInput type="text" name="walk" id="walk" value={walk} label="walk name" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Delete Walk <MDBIcon icon="trash"/>
          </MDBBtn>
        </form>
    </div>
    )
}

export default DeleteWalkForm