import Router from './Router/Router'
import { useContext, useEffect } from "react" 
import { ForumContext } from "../context/ForumContext"
import './App.css'

const App = (props) => {

  const {walks, cities, boards} = props

  const { setBoards, setLoadingBoards } = useContext(ForumContext)

 //   set the boards data
    useEffect(() => {
      setBoards(boards.data) // set state happens asynchronously
      setLoadingBoards(false)
    },[])

          return (
            <Router 
              // core app data
              walks={walks} 
              cities={cities} 
              />
          )

}

export default App