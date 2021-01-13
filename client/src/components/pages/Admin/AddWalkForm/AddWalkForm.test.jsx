import renderer from 'react-test-renderer'
import AddWalkForm from "./AddWalkForm"

// snapshot test
it('AddWalkForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <AddWalkForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});