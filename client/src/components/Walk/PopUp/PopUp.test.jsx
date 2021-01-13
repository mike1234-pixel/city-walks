import renderer from 'react-test-renderer'
import PopUp from './PopUp'

// snapshot test
it('Map Pop Up (in Walk) renders correctly', () => {  

  const mapImg = "mapimg"

  const tree = renderer
    .create(
        <PopUp mapImg={mapImg}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
