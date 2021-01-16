import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import qs from "qs";
import toTitleCase from '../../../../functions/toTitleCase'
import './AddBlogPostForm.css'

const AddBlogPostForm = () => {

    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")
    const [postImgLink, setPostImgLink] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "post-title":
              setPostTitle(event.target.value)
              break;
            case "post-content":
              setPostContent(event.target.value)
              break;
            case "post-img-link":
              setPostImgLink(event.target.value)
              break;
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            title: toTitleCase(postTitle),
            content: postContent,
            img: postImgLink,
          };

        axios
        .post("http://localhost:5000/add-blog-post", qs.stringify(payload))
        .then((err) => {
          if (err) {
            console.log(err);
          }
        });

        alert("Blog Post Submitted")
        setPostTitle("")
        setPostContent("")
        setPostImgLink("")
        window.scrollTo(0, 0);
    }

    return (
    <div>
        <h2>Add Blog Post</h2>
        <form onSubmit={handleSubmit} className="add-blog-post-form">
            <MDBInput type="text" name="post-title" id="post-title" value={postTitle} label="post title" onChange={handleChange} required/>
            <MDBInput type="textarea" rows="10" name="post-content" id="post-content" value={postContent} label="post content" onChange={handleChange} required/>
            <MDBInput type="text" name="post-img-link" id="post-img-link" value={postImgLink} label="post image link" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Add Blog Post <MDBIcon icon="plus" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default AddBlogPostForm