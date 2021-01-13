import renderer from 'react-test-renderer'
import AddBoardForm from "./AddBoardForm"

// snapshot test
it('AddBoardForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <AddBoardForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});