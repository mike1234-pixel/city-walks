import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios";
import qs from "qs";
import toTitleCase from '../../../../functions/toTitleCase'
import './AddBlogPostForm.css'

const AddBlogPostForm = () => {

    const [postTitle, setPostTitle] = useState("")
    const [postSubTitle, setPostSubTitle] = useState("")
    const [postContent, setPostContent] = useState("")
    const [postImgLink, setPostImgLink] = useState("")
    const [postAuthor, setPostAuthor] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "post-title":
              setPostTitle(event.target.value)
              break;
            case "post-subtitle":
              setPostSubTitle(event.target.value)
              break;
            case "post-content":
              setPostContent(event.target.value)
              break;
            case "post-img-link":
              setPostImgLink(event.target.value)
              break;
            case "post-author":
              setPostAuthor(event.target.value)
              break;
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            title: toTitleCase(postTitle),
            subtitle: toTitleCase(postSubTitle),
            content: postContent,
            img: postImgLink,
            author: toTitleCase(postAuthor)
          };

        axios
        .post("http://localhost:5000/add-blog-post", qs.stringify(payload))
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else if (res.data === "blog post saved") {
            console.log("blog post saved.")
          } else {
            console.log("blog not saved")
          }
        });

        alert("Blog Post Submitted")
        setPostTitle("")
        setPostSubTitle("")
        setPostContent("")
        setPostImgLink("")
        setPostAuthor("")
        window.scrollTo(0, 0);
    }

    return (
    <div>
        <h2>Add Blog Post</h2>
        <form onSubmit={handleSubmit} className="add-blog-post-form">
            <MDBInput type="text" name="post-title" id="post-title" value={postTitle} label="post title" onChange={handleChange} required/>
            <MDBInput type="text" name="post-subtitle" id="post-subtitle" value={postSubTitle} label="post sub-title" onChange={handleChange} required/>
            <MDBInput type="textarea" rows="10" name="post-content" id="post-content" value={postContent} label="post content" onChange={handleChange} required/>
            <MDBInput type="text" name="post-img-link" id="post-img-link" value={postImgLink} label="post image link" onChange={handleChange} required/>
            <MDBInput type="text" name="post-author" id="post-author" value={postAuthor} label="post author" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Add Blog Post <MDBIcon icon="plus" />
          </MDBBtn>
        </form>
    </div>
    )
}

export default AddBlogPostForm