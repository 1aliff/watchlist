// import React, { createContext, useProvider } from 'react'
// import AppReducer from './Reducers'

// // 1. initial State
// const initialState = {
//   query : '',
//   data : [],

// }

// // 2. create context -> pass initalState
// export const globalState = createContext(initialState)

// // 3. create globalProvider
// // 3.1 create provider
// export const globalProvider = () => {

//   const [state, dispatch ]= useProvider(AppReducer, initialState)

//   // 3.2 create so called 'Action' -> dispatch {{ type, payload }}


//   return (
//     <GlobalContext.Provider
//       // value={{      }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   )
// }