import renderer from 'react-test-renderer'
import DeleteBoardForm from "./DeleteBoardForm"

// snapshot test
it('DeleteBoardForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <DeleteBoardForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});