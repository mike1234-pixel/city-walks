import App from "./App"
import { render, fireEvent } from "@testing-library/react" // https://testing-library.com/docs/react-testing-library/cheatsheet

describe("App.jsx tests", () => {

  it("renders without crashing", () => {
    const { getByLabelText, getByTestId } = render(<App/>)
    // assert element exists
    getByLabelText("Search")

    // simulate user events
    const searchBar = getByTestId("search-input") 
    fireEvent.change(searchBar, { target: { value: "london" }})
    fireEvent.click(getByTestId("search-btn"))
    getByTestId("walks-page-heading")
  })

})

// don't write any tests that would be testing asynchronous code or api requests and their content as yet, 
// i.e. tests on the results of the dummyData.json results