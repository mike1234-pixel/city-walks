import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../context/LoginContext";
import { ForumContextProvider } from "../../../context/ForumContext"
import LoginPage from "./LoginPage"

// snapshot test
it('LoginPage Page renders correctly', () => {  

  const tree = renderer
    .create(
        <LoginContextProvider>
            <ForumContextProvider>
                <LoginPage />
            </ForumContextProvider>
        </LoginContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});