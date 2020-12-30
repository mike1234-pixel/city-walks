import App from "./App"
import { render, fireEvent } from "@testing-library/react"

// this is the only test that will direct query the dom

describe("App.jsx tests", () => {

  it("renders without crashing", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App/>)
    getByText("Search")

    const searchBar = getByPlaceholderText("Search") // grab search bar, input "london", click search button, Walks header should be rendered
    fireEvent.change(searchBar, { target: { value: "london" }})
    fireEvent.click(getByText("Search"))
    getByTestId("walks-page-heading")
  })


})




// --- example using @testing-library/dom (@testing-library/react acts as an abtraction of this)
  // import { getQueriesForElement } from "@testing-library/dom"
  // import ReactDOM from "react-dom"
  // it("renders without crashing", () => {
  // const { getByText, getByLabelText } = getQueriesForElement(root)
  // const root = document.createElement("div")
  // ReactDOM.render(<App />, root)
   //equiv to: expect(getByText("Search")).not.toBeNull()
   // })