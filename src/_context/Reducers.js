export default (state, action) => {
  switch(action.type) {
    case 'ADD_TO_WATCH_LIST' :
      return {
        ...state,
        watchlists: [action.payload, ...state.watchlists]
      }
    case 'DELETE_WATCH_LIST' :
      return {
        ...state,
        watchlists: state.watchlists.filter(watchlist => watchlist.id !== action.payload)
      }
    case 'ADD_TO_SEEN_LIST' :
      return {
        ...state,
        watchlists: state.watchlists.filter(watchlist => watchlist.id !== action.payload.id),
        seenlists: [action.payload, ...state.seenlists]
      }
    case 'DELETE_SEEN_LIST' :
      return {
        ...state,
        seenlists: state.seenlists.filter(seenlist => seenlist.id !== action.payload)
      }
    default: 
      return state;
  }
}