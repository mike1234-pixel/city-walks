import renderer from 'react-test-renderer'
import PrivacyPolicy from './PrivacyPolicy'

// snapshot test
it('Privacy Policy renders correctly', () => {  

  const tree = renderer
    .create(
        <PrivacyPolicy/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
