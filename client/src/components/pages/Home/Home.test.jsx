import renderer from 'react-test-renderer'
import axios from "axios"
import Home from './Home'

// snapshot test
it('Home Page renders correctly', () => {  

axios.get("/walks", (res, err) => {
  if (err) {
    console.log(error)
  } else {
    const walks = res.data

    const tree = renderer
    .create(<Home walks={walks}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  }
})


});