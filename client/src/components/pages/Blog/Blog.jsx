import { Link } from "react-router-dom"
import urlify from "../../../functions/urlify"
import "./Blog.css"

const Blog = (props) => {

    const { blogPosts } = props;

    return (
        <div className="min-page-height">
            <p>blog page</p>
            {blogPosts.map((post, index) => {
                return (
                    <div key={index} className="blog-post">
                        <Link to={"/blog/" + urlify(post.title)}>
                            <h1>{post.title}</h1>
                            <p>{post.content.slice(0,199) + "..."}</p>
                            <img src={post.img}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog