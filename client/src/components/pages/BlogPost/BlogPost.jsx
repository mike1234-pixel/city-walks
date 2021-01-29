import { useEffect, useContext, useState } from "react"
import { BlogsContext } from "../../../context/BlogsContext"
import PopUp from "../../PopUp/PopUp"
import { LoginContext } from "../../../context/LoginContext"
import toTitleCase from "../../../functions/toTitleCase"
import { MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import axios from "axios"
import qs from "qs"
import marked from "marked";
import './BlogPost.css'

const BlogPost = ({match}) => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   });

      const blogTitle = toTitleCase(match.url.replace("/blog/", "").replace(/-/g, " "))

      const { blogPosts, blogsLoading } = useContext(BlogsContext)
      const { loggedIn, userFirstName, userId, popupVisible } = useContext(LoginContext)

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
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else if (res.data === "comment submitted") {
          console.log("comment submitted")
        } else {
          console.log("comment not submitted")
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
          } else {
            alert("comment deleted.")
            window.location.reload()
          }
        });
      }

      let post = "loading"

      if (!blogsLoading) {

      let selectedBlogPost = blogPosts.filter((post) => post.title === blogTitle)
      selectedBlogPost = selectedBlogPost[0]
    
      const createMarkup = (markup) => {
        return {__html: marked(markup, {breaks: true})}
      }

      if (selectedBlogPost === undefined) {
        post = "walk not found"
      } else {
        post = 
        <div className="blog-post-container">
            <h1 className="page-heading">{selectedBlogPost.title}</h1>
            <h2 className="blog-subtitle page-heading">{selectedBlogPost.subtitle}</h2>
            <img className="blog-post-img" src={selectedBlogPost.img}/>
            <div className="blog-post-content" dangerouslySetInnerHTML={createMarkup(selectedBlogPost.content)}></div>
            <p>{selectedBlogPost.submittedOn.replace('T', ' ').substring(0, 19)}</p>
            {selectedBlogPost.comments.map((comment) => {
              return (
                <MDBCard className="blog-post-comment-card" key={comment._id}>
                  <MDBCardTitle>{comment.userFirstName} commented:</MDBCardTitle>
                  <MDBCardText>{comment.comment}</MDBCardText>
                  <MDBCardText>{comment.submittedOn.replace('T', ' ').substring(0, 19)}</MDBCardText>
                  {userId === comment.userId && <MDBBtn className="blog-post-comment-card-btn" onClick={() => handleDeleteComment(comment._id)}>Delete Comment</MDBBtn>}
                </MDBCard>
              )
            })}
        </div>
      }
    }

    return (
        <div>
            {popupVisible && <PopUp/>}
            <div>{post}</div>
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