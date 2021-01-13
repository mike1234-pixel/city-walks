import renderer from 'react-test-renderer'
import Admin from "./Admin"

// snapshot test
it('Admin Page renders correctly', () => {  

  const tree = renderer
    .create(
        <Admin />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});