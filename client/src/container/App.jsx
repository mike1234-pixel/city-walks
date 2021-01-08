import { useEffect } from "react"
import Router from './Router/Router'
import './App.css'

const App = (props) => {

  const {walks, cities} = props


  return (
    <Router 
      // core app data
      walks={walks} 
      cities={cities} 
      />
  )

}

export default App