import React from 'react'
import renderer from 'react-test-renderer'
import { BlogsContextProvider } from "../../../context/BlogsContext"
import { LoginContextProvider } from "../../../context/LoginContext"
import BlogPost from './BlogPost'

// snapshot test
it('Blog Post renders correctly', () => {  

  const tree = renderer
    .create(
        <LoginContextProvider>
            <BlogsContextProvider>
                <BlogPost match={{params: {id: 1}, isExact: true, path: "", url: "/blog/blog-title-1"}}/>
            </BlogsContextProvider>
        </LoginContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});