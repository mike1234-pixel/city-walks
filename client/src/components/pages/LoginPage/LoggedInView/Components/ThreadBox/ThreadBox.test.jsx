import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../../../../../context/LoginContext"
import ThreadBox from "./ThreadBox"

// snapshot test
it('ThreadBox renders correctly', () => {  

    const currentBoardName = "Your City"
    const threadId = "dvsbhjvsdkjdskjsdvjsd"
    const userFirstName = "John"
    const title = "Have you checked out this great restaurant?"
    const content = "There's a great new restaurant just opened in Sheffield..."
    const replies = [{
        "userFirstName": "James",
        "reply": "ive been there its cool",
        "submittedOn": "2021-01-13T18:08:18Z"
    },
    {
        "userFirstName": "Baz",
        "reply": "it's lame",
        "submittedOn": "2021-01-13T18:08:18Z"
    }]
    const submittedOn = "2021-01-13T18:08:18Z"
    const userId = "vdkjbdjjnsdn"

  const tree = renderer
    .create(
                <LoginContextProvider>
                    <ThreadBox 
                        currentBoardName={currentBoardName}
                        threadId={threadId}
                        userFirstName={userFirstName}
                        title={title}
                        content={content}
                        replies={replies}
                        submittedOn={submittedOn}
                        userId={userId}
                        />
                </LoginContextProvider>
            )
    .toJSON();
  expect(tree).toMatchSnapshot();
});