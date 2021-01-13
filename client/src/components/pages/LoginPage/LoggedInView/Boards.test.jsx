import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../../context/LoginContext"
import { ForumContextProvider } from "../../../../context/ForumContext"
import Boards from "./Boards"

// snapshot test
it('Boards Page renders correctly', () => {  

  const tree = renderer
    .create(
            <LoginContextProvider>
                <ForumContextProvider>
                    <Boards />
                </ForumContextProvider>
            </LoginContextProvider>
            )
    .toJSON();
  expect(tree).toMatchSnapshot();
});