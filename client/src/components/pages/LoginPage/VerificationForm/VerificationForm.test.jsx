import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../../context/LoginContext"
import VerificationForm from "./VerificationForm"

// snapshot test
it('VerificationForm renders correctly', () => {  

  const tree = renderer
    .create(
            <LoginContextProvider>
                <VerificationForm />
            </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});