import React, { createContext, useReducer } from 'react'
import AppReducer from './Reducers'

// // 1. initial State
const initialState = {
  watchlists : [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addToWatchList (movie) {
    dispatch ({
      type: 'ADD_TO_WATCHLIST',
      payload: movie
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlists: state.watchlists,
        addToWatchList
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}