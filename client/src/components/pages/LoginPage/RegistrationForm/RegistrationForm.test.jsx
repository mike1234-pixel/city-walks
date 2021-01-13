import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../../context/LoginContext"
import RegistrationForm from "./RegistrationForm"

// snapshot test
it('RegistrationForm renders correctly', () => {  

  const tree = renderer
    .create(
            <LoginContextProvider>
                <RegistrationForm />
            </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});