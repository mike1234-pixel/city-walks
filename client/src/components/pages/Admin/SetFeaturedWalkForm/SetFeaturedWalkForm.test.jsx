import renderer from 'react-test-renderer'
import SetFeaturedWalkForm from "./SetFeaturedWalkForm"

// snapshot test
it('SetFeaturedWalkForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <SetFeaturedWalkForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});