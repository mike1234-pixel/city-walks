import { createContext, useState } from "react"

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const [redirect, setRedirect] = useState(false)
  
    const handleChangeSearch = (e) => {
      setSearchValue(e.target.value)
    }
  
    const handleSubmitSearch = (e) => {
      e.preventDefault();
      setRedirect(true);
    }
  
    const handleClickSearch = (city) => {
      setSearchValue(city)
      setRedirect(true);
    }

    return (
        <SearchContext.Provider 
            value={{
            handleChangeSearch, 
            handleSubmitSearch,  
            redirect, 
            setRedirect,
            handleClickSearch, 
            searchValue,
            setSearchValue
            }}
        >
            {props.children}
        </SearchContext.Provider>
    )
}