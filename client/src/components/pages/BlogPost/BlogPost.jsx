import { useEffect, useContext, useState } from "react"
import { BlogsContext } from "../../../context/BlogsContext"
import { LoginContext } from "../../../context/LoginContext"
import toTitleCase from "../../../functions/toTitleCase"
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact"
import axios from "axios"
import qs from "qs"
import './BlogPost.css'

const BlogPost = ({match}) => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   });

      const blogTitle = toTitleCase(match.url.replace("/blog/", "").replace(/-/g, " "))

      const { blogPosts, blogsLoading } = useContext(BlogsContext)
      const { loggedIn, userFirstName, userId } = useContext(LoginContext)

      const [comment, setComment] = useState("")
      const [currentBlogTitle, setCurrentBlogTitle] = useState("")

      const handleChange = (event) => {
        setComment(event.target.value)
      }

      const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
          currentBlogTitle: blogTitle,
          comment: comment,
          userFirstName: userFirstName,
          userId: userId
        };

      axios
      .post("http://localhost:5000/add-blog-comment", qs.stringify(payload))
      .then((err) => {
        if (err) {
          console.log(err);
        }
      });

      alert("Comment Submitted")
      setComment("")
      window.location.reload()
      }

      const handleDeleteComment = (commentId) => {

        let payload = {
          currentBlogTitle: blogTitle,
          commentId: commentId,
        };
  
        axios
        .delete("http://localhost:5000/delete-blog-comment", { data: payload })
        .then((res, err) => {
          if (err) {
            console.log(err);
          }  else {
            alert("comment deleted.")
            window.location.reload()
          }
        });
      }

      let post = "loading"

      if (!blogsLoading) {

      let selectedBlogPost = blogPosts.filter((post) => post.title === blogTitle)
      selectedBlogPost = selectedBlogPost[0]

      if (selectedBlogPost === undefined) {
        post = "walk not found"
      } else {
        post = 
        <div>
            <h1>{selectedBlogPost.title}</h1>
            <p>{selectedBlogPost.content}</p>
            <img src={selectedBlogPost.img}/>
            {selectedBlogPost.comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <p>{comment.userFirstName} commented:</p>
                  <p>{comment.comment}</p>
                  <p>{comment.submittedOn.replace('T', ' ').substring(0, 19)}</p>
                  {userId === comment.userId && <MDBBtn onClick={() => handleDeleteComment(comment._id)}>Delete Comment</MDBBtn>}
                </div>
              )
            })}
        </div>
      }
    }

    return (
        <div>
            <p>BLOG POST (redirect successful)</p>
            <p>{post}</p>
            {loggedIn &&
              <form onSubmit={handleSubmit} className="add-blog-comment-form">
                <MDBInput type="textarea" rows="5" name="comment" id="comment" value={comment} label="comment" onChange={handleChange} required/>
                <MDBBtn outline color="elegant" type="submit">
                    Add Comment <MDBIcon icon="plus"/>
                </MDBBtn>
              </form>
            }
        </div>
    )
}

export default BlogPost