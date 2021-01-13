import renderer from 'react-test-renderer'
import DeleteWalkForm from "./DeleteWalkForm"

// snapshot test
it('DeleteWalkForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <DeleteWalkForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});