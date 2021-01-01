import renderer from 'react-test-renderer'
import Footer from './Footer'

// snapshot test
it('Footer renders correctly', () => {  

  const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});