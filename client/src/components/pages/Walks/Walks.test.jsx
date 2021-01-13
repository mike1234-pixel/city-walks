import renderer from 'react-test-renderer'
import { SearchContextProvider } from "../../../context/SearchContext"
import { LoginContextProvider } from "../../../context/LoginContext"
import WalksTestData from "../../../container/WalksTestData.json"
import { BrowserRouter } from 'react-router-dom';
import Walks from './Walks'

// snapshot test
it('Walks Page renders correctly', () => {  

  const walks = WalksTestData

  const tree = renderer
    .create(
    <SearchContextProvider>
      <LoginContextProvider>
        <BrowserRouter>
          <Walks walks={walks}/>
        </BrowserRouter>
      </LoginContextProvider>
    </SearchContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});