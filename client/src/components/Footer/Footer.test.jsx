import renderer from 'react-test-renderer'
import { BrowserRouter } from "react-router-dom"
import { LoginContextProvider } from "../../context/LoginContext"
import Footer from './Footer'


// snapshot test
it('Footer renders correctly', () => {  

  const tree = renderer
    .create(
    <LoginContextProvider>
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
    </LoginContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});