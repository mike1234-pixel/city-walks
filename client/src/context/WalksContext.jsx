import { createContext, useState } from "react"

export const WalksContext = createContext();

export const WalksContextProvider = (props) => {

    const [walks, setWalks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <WalksContext.Provider 
            value={{
                walks,
                setWalks,
                isLoading,
                setIsLoading
            }}
        >
            {props.children}
        </WalksContext.Provider>
    )
}