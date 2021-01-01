import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import qs from "qs";
import './AddWalkForm.css'

const AddWalkForm = () => {

    const [route, setRoute] = useState("")
    const [walk, setWalk] = useState("")
    const [city, setCity] = useState("")
    const [description, setDescription] = useState("")
    const [startingPoint, setStartingPoint] = useState("")
    const [content1, setContent1] = useState("")
    const [content2, setContent2] = useState("")
    const [content3, setContent3] = useState("")
    const [coverImg, setCoverImg] = useState("")
    const [img1, setImg1] = useState("")
    const [img2, setImg2] = useState("")
    const [img3, setImg3] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "route":
              setRoute(event.target.value)
              break;
            case "walk":
              setWalk(event.target.value)
              break;
            case "city":
              setCity(event.target.value)
              break;
            case "description":
              setDescription(event.target.value)
              break;
            case "starting-point":
              setStartingPoint(event.target.value)
              break;
            case "content1":
              setContent1(event.target.value)
              break;
            case "content2":
              setContent2(event.target.value)
              break;
            case "content3":
              setContent3(event.target.value)
              break;
            case "cover-img":
              setCoverImg(event.target.value)
              break;
            case "img1":
              setImg1(event.target.value)
              break;
            case "img2":
              setImg2(event.target.value)
              break;
            case "img3":
              setImg3(event.target.value)
              break;
            default:
              console.log("other")
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            route: route,
            walk: walk,
            city: city,
            description: description,
            startingPoint: startingPoint,
            content1: content1,
            content2: content2,
            content3: content3,
            coverImg: coverImg,
            img1: img1,
            img2: img2, 
            img3: img3
          };

        axios
        .post("http://localhost:5000/add-walk", qs.stringify(payload))
        .then((err) => {
          if (err) {
            console.log(err);
          }
        });

        alert("Walk Submitted")
    }

    return (
    <div>
        <h2>Add Walk</h2>
        <form onSubmit={handleSubmit} className="add-walk-form">
            <MDBInput type="text" name="route" id="route" value={route} label="url route: lowercase characters and hyphens only, e.g. 'stoke-newington'" onChange={handleChange} maxLength="70" pattern="^[a-z\-]+$" required/>
            <MDBInput type="text" name="walk" id="walk" value={walk} label="walk" onChange={handleChange} maxLength="70" required/>
            <MDBInput type="text" name="city" id="city" value={city} label="city" onChange={handleChange}  maxLength="70" required/>
            <MDBInput type="text" name="description" id="description" value={description} label="description" onChange={handleChange} maxLength="136" required/>
            <MDBInput type="text" name="starting-point" id="starting-point" value={startingPoint} label="starting point" onChange={handleChange} maxLength="100" required/>
            <MDBInput type="text" name="content1" id="content1" value={content1} label="paragraph 1 (569 character limit)" onChange={handleChange} maxLength="569" required/>
            <MDBInput type="text" name="content2" id="content2" value={content2} label="paragraph 2 (569 character limit)" onChange={handleChange} maxLength="569" required/>
            <MDBInput type="text" name="content3" id="content3" value={content3} label="paragraph 3 (569 character limit)" onChange={handleChange} maxLength="569" required/>
            <MDBInput type="text" name="cover-img" id="cover-img" value={coverImg} label="cover image link" onChange={handleChange} required/>
            <MDBInput type="text" name="img1" id="img1" value={img1} label="image 1 link" onChange={handleChange} required/>
            <MDBInput type="text" name="img2" id="img2" value={img2} label="image 2 link" onChange={handleChange} required/>
            <MDBInput type="text" name="img3" id="img3" value={img3} label="image 3 link" onChange={handleChange} required/>
            <MDBBtn className="btn btn-outline-purple" type="submit">
                Send Walk
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default AddWalkForm

// {
//     "id": "UNIQUE_ID",
//     "route": "URL_ROUTE", ** used to create routes, e.g. stoke-newington. lowercase, no spaces or non-alphabetic characters**
//     "walk": "stoke newington",
//     "city": "london",
//     "description": "MAX 136 CHARS",
//     "starting_point": "old street",
//     "content_1": "MAX 569 CHARS",
//     "content_2": "MAX 569 CHARS",
//     "content_3": "MAX 569 CHARS",
//     "cover_img_link": "https://...",
//     "img_1_link": "https://...",
//     "img_2_link": "https://...",
//     "img_3_link": "https://..."
// },