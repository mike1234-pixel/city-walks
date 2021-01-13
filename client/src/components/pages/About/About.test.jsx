import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../context/LoginContext"
import About from './About'

// snapshot test
it('About Page renders correctly', () => {  

  const tree = renderer
    .create(<LoginContextProvider><About /></LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});