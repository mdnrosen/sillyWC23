import { createContext, useState, useContext } from "react";

const GuessContext = createContext({});

export function getGuesses(){
    return useContext(GuessContext)
}

export function GuessesProvider({ children }){
    const [ guesses, setGuesses ] = useStickyState({}, 'sillywc_guesses')

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