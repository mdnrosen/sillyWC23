import { createContext, useState, useEffect,useContext } from "react";

const GuessContext = createContext({});

export function useGuesses(){
    return useContext(GuessContext)
}

export function GuessesProvider({ children }){
    const [ guesses, setGuesses ] = useStickyState({}, 'sillywc_guesses')

    // This is a custom hook to persist state on refresh
    function useStickyState(defaultVal, key) {
      const [ value, setValue ] = useState(() => {
        const stickyVal = window.localStorage.getItem(key)
          return stickyVal !== null ? JSON.parse(stickyVal) : defaultVal
        })
  
        useEffect(() => {
          window.localStorage.setItem(key, JSON.stringify(value))
        }, [key, value])
        return [ value, setValue ]
      }
  
    const updateGuesses = (name, value) => {
        setGuesses({...guesses, [name]: value});
    }

    return (
        <GuessContext.Provider value={{ guesses, updateGuesses }}>
            {children}
        </GuessContext.Provider>
    )
}