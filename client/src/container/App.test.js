import App from "./App"
import { ForumContextProvider } from "../context/ForumContext"
import { SearchContextProvider } from "../context/SearchContext"
import { LoginContextProvider } from "../context/LoginContext"
import { RecaptchaContextProvider } from "../context/RecaptchaContext"
import { WalksContextProvider } from "../context/WalksContext"
import { render, fireEvent } from "@testing-library/react" // https://testing-library.com/docs/react-testing-library/cheatsheet
import WalksTestData from "./WalksTestData.json"
import CitiesTestData from "./CitiesTestData.json"
import BoardsTestData from "./BoardsTestData.json"

// integration tests (simulate user interaction)
describe("App integration tests", () => {

  it("renders without crashing", () => {
    window.scrollTo = jest.fn()

    const { getByLabelText, getByTestId } = render(
      <ForumContextProvider>
      <RecaptchaContextProvider>
        <LoginContextProvider>
          <SearchContextProvider>
            <WalksContextProvider>
              <App walks={WalksTestData} cities={CitiesTestData} boards={BoardsTestData}/>
            </WalksContextProvider>
          </SearchContextProvider>
        </LoginContextProvider>
      </RecaptchaContextProvider>
    </ForumContextProvider>
    )
    // assert element exists
    getByLabelText("Search")

    // simulate user events
    const searchBar = getByTestId("search-input") 
    fireEvent.change(searchBar, { target: { value: "london" }})
    fireEvent.click(getByTestId("search-btn"))
    getByTestId("walks-page-heading")
  })

})