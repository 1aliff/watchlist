import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './Reducers'

const initialState = {
  watchlists : localStorage.getItem("watchlists") ? JSON.parse(localStorage.getItem("watchlists")) : [],
  seenlists: localStorage.getItem("seenlists") ? JSON.parse(localStorage.getItem("seenlists")) : [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 'Set' our localStorage when mounted -> re-mount everytime state changes
  useEffect(() => {
    localStorage.setItem("watchlists", JSON.stringify(state.watchlists))
    localStorage.setItem("seenlists", JSON.stringify(state.seenlists))
  }, [state])

  // watchlist section
   const addToWatchList = (movie) => {
    dispatch ({
      type: 'ADD_TO_WATCH_LIST',
      payload: movie
    })
  }

  const deleteWatchList = id => {
    dispatch({
      type: 'DELETE_WATCH_LIST',
      payload: id
    })
  }

  // seenlist section
  const addToSeenList = movie => {
    dispatch ({
      type: 'ADD_TO_SEEN_LIST',
      payload: movie
    })
  }

  const deleteSeenList = id => {
    dispatch ({
      type: 'DELETE_SEEN_LIST',
      payload: id
    })
  }


  return (
    <GlobalContext.Provider
      value={{
        watchlists: state.watchlists,
        seenlists: state.seenlists,
        addToWatchList,
        deleteWatchList,
        addToSeenList,
        deleteSeenList
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}