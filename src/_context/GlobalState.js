import React, { createContext, useReducer } from 'react'
import AppReducer from './Reducers'

const initialState = {
  watchlists : [],
  seenlists: [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState);

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