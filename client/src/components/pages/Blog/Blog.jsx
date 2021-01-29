import { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import PopUp from "../../PopUp/PopUp"
import { LoginContext } from "../../../context/LoginContext"
import { MDBBtn, MDBIcon, MDBCard, MDBCol, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from  "mdbreact"
import urlify from "../../../functions/urlify"
import "./Blog.css"

const Blog = (props) => {

    const { popupVisible } = useContext(LoginContext)

    useEffect(() => {
        window.scrollTo(0, 0);
      });

    const { blogPosts } = props;

    const removeMarkdown = (markup) => {
        return markup.replace(/\**/g, "").replace(/#/g, "")
      }

    return (
        <div className="min-page-height">
            {popupVisible && <PopUp/>}
            <div className="page-heading-container">
                <h1 className="page-heading">Blog</h1>
            </div>
            <div className="card-container">
            {blogPosts.map((post) => {
                return (
                    <MDBCol key={post._id}>
                    <MDBCard className="blog-card">
                        <MDBCardImage className="cutter img-fluid" src={post.img} alt={post.title} waves/>
                        <MDBCardBody>
                        <MDBCardTitle className="display-font">{post.title}</MDBCardTitle>
                        <MDBCardText>{removeMarkdown(post.content.slice(0,199) + "...")}</MDBCardText>
                        <Link to={'/blog/'+urlify(post.title)}><MDBBtn outline color="elegant" className="city-card-btn">Read <MDBIcon icon="book-open" /></MDBBtn></Link>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                )
            }).reverse()}
            </div>
        </div>
    )
}

export default Blog

