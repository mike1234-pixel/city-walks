import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import qs from "qs";
import toTitleCase from '../../../../functions/toTitleCase'
import './AddBoardForm.css'

const AddBoardForm = () => {

    const [boardName, setBoardName] = useState("")
    const [boardDescription, setBoardDescription] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "board-name":
              setBoardName(event.target.value)
              break;
            case "board-description":
              setBoardDescription(event.target.value)
              break;
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            name: toTitleCase(boardName),
            description: boardDescription
          };

        axios
        .post("http://localhost:5000/add-board", qs.stringify(payload))
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else if (res.data === "board saved") {
            console.log("board saved")
          } else {
            console.log("board not saved")
          }
        });

        alert("Board Submitted")
        setBoardName("")
        setBoardDescription("")
        window.scrollTo(0, 0);
    }

    return (
    <div>
        <h2>Add Board</h2>
        <form onSubmit={handleSubmit} className="add-board-form">
            <MDBInput type="text" name="board-name" id="board-name" value={boardName} label="board name" onChange={handleChange} required/>
            <MDBInput type="text" name="board-description" id="board-description" value={boardDescription} label="board description" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Add Board <MDBIcon icon="plus" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default AddBoardForm