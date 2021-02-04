export default (state, action) => {
  switch(action.type) {
    case 'ADD_TO_WATCHLIST' :
      return {
        ...state,
        watchlists: [action.payload, ... state.watchlists]
      }
      default: 
        return state;
  }
}