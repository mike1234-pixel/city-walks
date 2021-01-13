import renderer from 'react-test-renderer'
import DeleteCityForm from "./DeleteCityForm"

// snapshot test
it('DeleteCityForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <DeleteCityForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});