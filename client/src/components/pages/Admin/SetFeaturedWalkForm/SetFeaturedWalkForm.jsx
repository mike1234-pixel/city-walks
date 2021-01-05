import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import qs from "qs";
import './SetFeaturedWalkForm.css'

const SetFeaturedWalkForm = () => {
    const [featuredWalk1, setFeaturedWalk1] = useState("")
    const [featuredWalk2, setFeaturedWalk2] = useState("")
    const [featuredWalk3, setFeaturedWalk3] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "featured-walk-1":
              setFeaturedWalk1(event.target.value)
              break;
            case "featured-walk-2":
              setFeaturedWalk2(event.target.value)
              break;
            case "featured-walk-3":
              setFeaturedWalk3(event.target.value)
              break;
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            featuredWalk1: featuredWalk1,
            featuredWalk2: featuredWalk2,
            featuredWalk3: featuredWalk3,
          };

        axios
        .post("http://localhost:5000/set-featured-walk", qs.stringify(payload))
        .then((err) => {
          if (err) {
            console.log(err);
          } 
        });
        alert("Featured walks set")
        setFeaturedWalk1("")
        setFeaturedWalk2("")
        setFeaturedWalk3("")
        window.scrollTo(0, 0);

    }
    return (
        <div>
        <h2>Set Featured Walks</h2>
        <form onSubmit={handleSubmit} className="set-featured-walk-form">
            <MDBInput type="text" name="featured-walk-1" id="featured-walk-1" value={featuredWalk1} label="featured walk 1 (walk name, e.g 'Stoke Newington')" onChange={handleChange} required/>
            <MDBInput type="text" name="featured-walk-2" id="featured-walk-2" value={featuredWalk2} label="featured walk 2 (walk name, e.g 'Buckingham Palace')" onChange={handleChange} required/>
            <MDBInput type="text" name="featured-walk-3" id="featured-walk-3" value={featuredWalk3} label="featured walk 3 (walk name, e.g 'Old Street')" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Set Featured Walks
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default SetFeaturedWalkForm