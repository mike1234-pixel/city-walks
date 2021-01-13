import renderer from 'react-test-renderer'
import { LoginContextProvider } from "../../context/LoginContext"
import { BrowserRouter } from 'react-router-dom';
import PopUp from './PopUp'

// snapshot test
it('PopUp renders correctly', () => {  

  const tree = renderer
    .create(
        <LoginContextProvider>
            <BrowserRouter>
                <PopUp/>
            </BrowserRouter>
        </LoginContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});