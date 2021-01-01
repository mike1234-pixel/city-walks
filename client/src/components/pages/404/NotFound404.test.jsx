import renderer from 'react-test-renderer'
import NotFound404 from './NotFound404'

// snapshot test
it('NotFound404 Page renders correctly', () => {  

  const tree = renderer
    .create(<NotFound404 location='/'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});