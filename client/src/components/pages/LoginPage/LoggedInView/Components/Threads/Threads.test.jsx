import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../../../../context/LoginContext"
import { ForumContextProvider } from "../../../../../../context/ForumContext"
import Threads from "./Threads"

// snapshot test
it('Threads renders correctly', () => {  

  const tree = renderer
    .create(
        <ForumContextProvider>
            <LoginContextProvider>
                <Threads match={{params: {id: 1}, isExact: true, path: "", url: "/boards/your-city"}} />
            </LoginContextProvider>
        </ForumContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});