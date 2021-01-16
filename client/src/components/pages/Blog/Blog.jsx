import "./Blog.css"

const Blog = (props) => {

    const { blogPosts } = props;

    return (
        <div className="min-page-height">
            <p>blog page</p>
            {blogPosts.map((post) => {
                return (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.content.slice(0,199) + "..."}</p>
                        <img src={post.img}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog