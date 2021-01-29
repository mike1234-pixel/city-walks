import { useState } from "react"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios"
import toTitleCase from '../../../../functions/toTitleCase'
import './DeleteBlogPostForm.css'

const DeleteBlogPostForm = () => {

    const [postTitle, setPostTitle] = useState("")

    const handleChange = (event) => {
        switch(event.target.name) {
            case "post-title":
              setPostTitle(event.target.value)
              break;
          } 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            postTitle: toTitleCase(postTitle)
          };

        axios
        .delete("http://localhost:5000/delete-blog-post",{ data: payload } )
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else if (res.data === "blog post deleted") {
            console.log("blog post deleted")
          } else {
            console.log("response not deleted")
          }
        });

        alert("Blog Post Deleted")
        setPostTitle("")
        window.scrollTo(0, 0);
    }

    return (
    <div>
        <h2>Delete Blog Post</h2>
        <form onSubmit={handleSubmit} className="delete-blog-post-form">
            <MDBInput type="text" name="post-title" id="post-title" value={postTitle} label="blog post title" onChange={handleChange} required/>
            <MDBBtn outline color="elegant" type="submit">
                Delete Post <MDBIcon icon="trash"/>
          </MDBBtn>
        </form>
    </div>
    )
}

export default DeleteBlogPostForm