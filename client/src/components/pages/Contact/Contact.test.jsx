import renderer from 'react-test-renderer'
import { RecaptchaContextProvider } from "../../../context/RecaptchaContext"
import { LoginContextProvider } from "../../../context/LoginContext"
import Contact from './Contact'

// snapshot test
it('Contact Page renders correctly', () => {  

  const tree = renderer
    .create(
      <RecaptchaContextProvider>
        <LoginContextProvider>
          <Contact/>
        </LoginContextProvider>
      </RecaptchaContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});