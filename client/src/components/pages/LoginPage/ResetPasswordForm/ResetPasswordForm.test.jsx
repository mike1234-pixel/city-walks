import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../../context/LoginContext"
import ResetPasswordForm from "./ResetPasswordForm"

// snapshot test
it('ResetPasswordForm renders correctly', () => {  

  const tree = renderer
    .create(
            <LoginContextProvider>
                <ResetPasswordForm />
            </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});