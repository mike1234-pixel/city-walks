import renderer from 'react-test-renderer'
import AddBlogPostForm from "./AddBlogPostForm"

// snapshot test
it('AddBlogPostForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <AddBlogPostForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});