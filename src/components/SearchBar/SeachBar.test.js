import React from 'react'
import renderer from 'react-test-renderer'
import SearchBar from './SearchBar'

// snapshot test
// jest will create a snapshot automatically on first run
// to update the snapshot run npm test -- --updateSnapshot
it('SearchBar renders correctly', () => {  
  const tree = renderer
    .create(<SearchBar/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});




