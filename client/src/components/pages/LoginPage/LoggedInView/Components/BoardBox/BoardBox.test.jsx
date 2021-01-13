import renderer from 'react-test-renderer'
import { ForumContextProvider } from "../../../../../../context/ForumContext"
import { BrowserRouter } from "react-router-dom"
import BoardBox from "./BoardBox"

// snapshot test
it('BoardBox renders correctly', () => {  

    const name = "board name"
    const description = "board description"

  const tree = renderer
    .create(
                <ForumContextProvider>
                    <BrowserRouter>
                        <BoardBox name={name} description={description} />
                    </BrowserRouter>
                </ForumContextProvider>
            )
    .toJSON();
  expect(tree).toMatchSnapshot();
});