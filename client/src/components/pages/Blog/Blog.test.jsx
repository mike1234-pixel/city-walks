import renderer from 'react-test-renderer'
import BlogsTestData from "../../../container/BlogsTestData.json"
import { BrowserRouter } from 'react-router-dom';
import Blog from './Blog'

// snapshot test
it('Blogs Page renders correctly', () => {  

  const blogPosts = BlogsTestData

  const tree = renderer
    .create(
        <BrowserRouter>
          <Blog blogPosts={blogPosts}/>
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});