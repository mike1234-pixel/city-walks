import Router from './Router/Router'
import { useContext, useEffect } from "react" 
import { ForumContext } from "../context/ForumContext"
import { WalksContext }from "../context/WalksContext"
import './App.css'

const App = (props) => {

  const {walks, cities, boards} = props

  const { setBoards, setLoadingBoards } = useContext(ForumContext)
  const { setWalks,  setIsLoading } = useContext(WalksContext)

  //   set the boards and walks data
      useEffect(() => {
        setBoards(boards.data) // set state happens asynchronously
        setLoadingBoards(false)
        setWalks(walks)
        setIsLoading(false)
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