import renderer from 'react-test-renderer'
import Carousel from './Carousel'

// snapshot test
it('Carousel renders correctly', () => {  

  const tree = renderer
    .create(<Carousel/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});