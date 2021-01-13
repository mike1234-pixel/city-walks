import React from 'react'
import renderer from 'react-test-renderer'
import SectionB from './SectionB'

// snapshot test
it('Section B renders correctly', () => {  
    
    const content = "mock content"
    const img = "imagefile"
    const alt = "alt attribute"

  const tree = renderer
    .create(
        <SectionB content={content} img={img} alt={alt}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});