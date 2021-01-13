import renderer from 'react-test-renderer'
import Nav from './Nav'
import { SearchContextProvider } from "../../context/SearchContext"
import { BrowserRouter as Router } from "react-router-dom"

// snapshot test
it('Nav renders correctly', () => {  

  const tree = renderer
    .create(
        <SearchContextProvider>
            <Router>
                <Nav/> 
            </Router>
          </SearchContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Nav contains NavLinks so has to be wrapped in a Router otherwise test throws an error  