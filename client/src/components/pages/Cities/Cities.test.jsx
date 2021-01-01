import renderer from 'react-test-renderer'
import Cities from './Cities'

// snapshot test
it('Cities Page renders correctly', () => {  

  const tree = renderer
    .create(<Cities/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});