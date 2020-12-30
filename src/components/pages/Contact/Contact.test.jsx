import renderer from 'react-test-renderer'
import Contact from './Contact'

// snapshot test
it('Contact Page renders correctly', () => {  

  const tree = renderer
    .create(<Contact/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});