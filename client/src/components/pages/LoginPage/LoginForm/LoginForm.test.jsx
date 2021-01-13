import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../../context/LoginContext"
import LoginForm from "./LoginForm"

// snapshot test
it('LoginForm renders correctly', () => {  

  const tree = renderer
    .create(
            <LoginContextProvider>
                <LoginForm />
            </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});