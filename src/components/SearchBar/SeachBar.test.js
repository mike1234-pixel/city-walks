import React from 'react'
import renderer from 'react-test-renderer'
import SearchBar from './SearchBar'

// snapshot test
it('SearchBar renders correctly', () => {  
  const tree = renderer
    .create(<SearchBar/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});




