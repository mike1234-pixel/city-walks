import React from 'react'
import renderer from 'react-test-renderer'
import { SearchContextProvider } from "../../context/SearchContext"
import SearchBar from './SearchBar'

// snapshot test
it('SearchBar renders correctly', () => {  
  const tree = renderer
    .create(
    <SearchContextProvider>
        <SearchBar/>
    </SearchContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});




