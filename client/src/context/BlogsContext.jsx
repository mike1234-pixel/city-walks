import { createContext, useState } from "react"

export const BlogsContext = createContext();

export const BlogsContextProvider = (props) => {

    const [blogPosts, setBlogPosts] = useState([])
    const [blogsLoading, setBlogsLoading] = useState(true)

    return (
        <BlogsContext.Provider 
            value={{
                blogPosts,
                setBlogPosts,
                blogsLoading,
                setBlogsLoading,
            }}
        >
            {props.children}
        </BlogsContext.Provider>
    )
}