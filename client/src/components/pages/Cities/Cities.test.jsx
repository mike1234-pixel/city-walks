import renderer from 'react-test-renderer'
import { SearchContextProvider } from "../../../context/SearchContext"
import { LoginContextProvider } from "../../../context/LoginContext"
import CitiesTestData from "../../../container/CitiesTestData.json"
import Cities from './Cities'

// snapshot test
it('Cities Page renders correctly', () => {  

  const cities = CitiesTestData 

  const tree = renderer
    .create(
    <LoginContextProvider>
      <SearchContextProvider>
        <Cities cities={cities}/>
      </SearchContextProvider>
    </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});