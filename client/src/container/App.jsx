import Router from './Router/Router'
import { useContext, useEffect } from "react" 
import { ForumContext } from "../context/ForumContext"
import { WalksContext } from "../context/WalksContext"
import { LoginContext } from "../context/LoginContext"
import './App.css'

const App = (props) => {

  const {walks, cities, boards} = props

  const { setBoards, setLoadingBoards } = useContext(ForumContext)
  const { setWalks,  setIsLoading } = useContext(WalksContext)
  const { setPopupVisible, setLoggedIn, setUserId, setUserFirstName } = useContext(LoginContext)

  //   set the boards and walks data
      useEffect(() => {
        setBoards(boards.data) // set state happens asynchronously
        setLoadingBoards(false)
        setWalks(walks)
        setIsLoading(false)

        if (localStorage.getItem("popupVisible") === null) {
           localStorage.setItem("popupVisible", true)
           setPopupVisible(true)
        }
        


        if (localStorage.getItem("loggedIn") !== null) {
          setLoggedIn(true)
          setUserId(localStorage.getItem("userId"))
          setUserFirstName(localStorage.getItem("userFirstName"))
        }

      },[])

        return (
          <div>
            <Router 
              // core app data
              walks={walks} 
              cities={cities} 
              />
            </div>
        )

}

export default App

// // setter
// localStorage.setItem('myData', data);
 
// // getter
// localStorage.getItem('myData');
 
// // remove
// localStorage.removeItem('myData');
 
// // remove all
// localStorage.clear();