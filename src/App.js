import React from 'react';
import { Navbar, WatchedLists, WishLists, Homepage } from './components/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalProvider } from './_context/GlobalState'

const App = () => {
  return (
      <GlobalProvider>
        <div className="App">
          <Router>
            <Navbar />
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/watchlist">
                  <WishLists />
                </Route>
                <Route exact path="/watched">
                  <WatchedLists />
                </Route>
              </Switch>
          </Router>
        </div>
      </GlobalProvider>
  )
}

export default App;
