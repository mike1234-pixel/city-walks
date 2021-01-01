import renderer from 'react-test-renderer'
import Home from './Home'

// snapshot test
it('Home Page renders correctly', () => {  

  const tree = renderer
    .create(<Home/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});