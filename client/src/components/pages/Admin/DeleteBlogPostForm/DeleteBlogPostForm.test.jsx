import renderer from 'react-test-renderer'
import DeleteBlogPostForm from "./DeleteBlogPostForm"

// snapshot test
it('DeleteBlogPostForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <DeleteBlogPostForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});