import renderer from 'react-test-renderer'
import About from './About'

// snapshot test
it('About Page renders correctly', () => {  

  const tree = renderer
    .create(<About/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});