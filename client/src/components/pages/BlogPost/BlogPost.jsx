import { useEffect, useContext } from "react"
import { BlogsContext } from "../../../context/BlogsContext"
import toTitleCase from "../../../functions/toTitleCase"
import './BlogPost.css'

const BlogPost = ({match}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      });

      const { blogPosts, blogsLoading } = useContext(BlogsContext)

      const blogTitle = toTitleCase(match.url.replace("/blog/", "").replace(/-/g, " "))


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
        </div>
      }
    }

    return (
        <div>
            <p>BLOG POST (redirect successful)</p>
            <p>{post}</p>
        </div>
    )
}

export default BlogPost