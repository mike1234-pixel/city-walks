import renderer from 'react-test-renderer'
import AddCityForm from "./AddCityForm"

// snapshot test
it('AddCityForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <AddCityForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});