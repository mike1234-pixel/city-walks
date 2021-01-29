import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import toTitleCase from '../../../../functions/toTitleCase'
import './DeleteBoardForm.css'

const DeleteBoardForm = () => {

    const [boardName, setBoardName] = useState("")

    const handleChange = (event) => {
        setBoardName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const payload = {
            boardName: toTitleCase(boardName)
        }

        axios
        .delete("http://localhost:5000/delete-board", {data: payload})
        .then((res, err) => {
            if (err) {
              console.log(err);
            } else if (res.data === "board deleted") {
              console.log("board deleted")
            } else {
              console.log("board not deleted")
            }
          });
  
          alert("Board Deleted")
          setBoardName("")
          window.scrollTo(0, 0);
    } 


    return (
        <div>
        <h2>Delete Board</h2>
        <form onSubmit={handleSubmit} className="delete-board-form">
            <MDBInput type="text" name="board-name" id="board-name" value={boardName} label="board name" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Delete Board <MDBIcon icon="trash" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default DeleteBoardForm