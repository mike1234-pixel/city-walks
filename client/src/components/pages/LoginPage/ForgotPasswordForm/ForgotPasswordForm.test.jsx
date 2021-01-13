import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../../context/LoginContext"
import ForgotPasswordForm from "./ForgotPasswordForm"

// snapshot test
it('ForgotPasswordForm Page renders correctly', () => {  

  const tree = renderer
    .create(
        <LoginContextProvider>
            <ForgotPasswordForm />
        </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});