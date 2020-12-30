import renderer from 'react-test-renderer'
import Walks from './Walks'

// snapshot test
it('Walks Page renders correctly', () => {  

  const tree = renderer
    .create(<Walks/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});