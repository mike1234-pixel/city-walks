import App from "./App"
import { ForumContextProvider } from "../context/ForumContext"
import { SearchContextProvider } from "../context/SearchContext"
import { LoginContextProvider } from "../context/LoginContext"
import { RecaptchaContextProvider } from "../context/RecaptchaContext"
import { WalksContextProvider } from "../context/WalksContext"
import { BlogsContextProvider } from "../context/BlogsContext"
import { render, fireEvent, cleanup } from "@testing-library/react" // https://testing-library.com/docs/react-testing-library/cheatsheet
import WalksTestData from "./WalksTestData.json"
import CitiesTestData from "./CitiesTestData.json"
import BoardsTestData from "./BoardsTestData.json"
import BlogsTestData from "./BlogsTestData.json"

// integration tests (simulate user interaction)
describe("App integration tests", () => {

  afterEach(cleanup)
      //  data-testid

  it("renders without crashing", () => {
    window.scrollTo = jest.fn()

    const { getByLabelText, getByTestId } = render(
    <ForumContextProvider>
      <RecaptchaContextProvider>
        <LoginContextProvider>
          <SearchContextProvider>
            <WalksContextProvider>
              <BlogsContextProvider>
                <App walks={WalksTestData} cities={CitiesTestData} boards={BoardsTestData} blogPosts={BlogsTestData}/>
              </BlogsContextProvider>
            </WalksContextProvider>
          </SearchContextProvider>
        </LoginContextProvider>
      </RecaptchaContextProvider>
    </ForumContextProvider>
    )
    // assert element exists
    getByLabelText("Search")

    // test is on Home page - redirect to Walk page
    // simulate redirect from homepage featured walk to the same walk
    const exploreButton = getByTestId("explore-btn-1")
    fireEvent.click(exploreButton)
    getByTestId("walk-page")

    // test is on Walk page, redirect to Walks Page
    // simulate redirect from homepage to walks page via the search bar
    const searchBar = getByTestId("search-input") 
    fireEvent.change(searchBar, { target: { value: "london" }})
    fireEvent.click(getByTestId("search-btn"))
    getByTestId("walks-page-heading")
    expect(getByTestId("walks-search-icon").textContent).toBe('  london')

    // redirect to cities page
    fireEvent.click(getByTestId("nav-link-cities"))
    getByTestId("cities-page-heading")

    
  })

})