import React from 'react'
import renderer from 'react-test-renderer'
import SectionA from './SectionA'

// snapshot test
it('Section A renders correctly', () => {  
    
    const content = "mock content"
    const img = "imagefile"
    const alt = "alt attribute"

  const tree = renderer
    .create(
        <SectionA content={content} img={img} alt={alt}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
