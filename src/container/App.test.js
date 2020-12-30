import App from "./App"
import { render, fireEvent } from "@testing-library/react" // https://testing-library.com/docs/react-testing-library/cheatsheet

describe("App.jsx tests", () => {

  it("renders without crashing", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App/>)
    // assert element exists
    getByText("Search")

    // simulate user events
    const searchBar = getByPlaceholderText("Search") // grab search bar, input "london", click search button, Walks header should be rendered
    fireEvent.change(searchBar, { target: { value: "london" }})
    fireEvent.click(getByText("Search"))
    getByTestId("walks-page-heading")
  })

})

// don't write any tests that would be testing asynchronous code or api requests and their content as yet, 
// i.e. tests on the results of the dummyData.json results