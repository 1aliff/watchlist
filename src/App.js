import React from 'react';
import { Navbar, SeenLists, WatchLists, Homepage } from './components/index'
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
                  <WatchLists />
                </Route>
                <Route exact path="/seenlist">
                  <SeenLists />
                </Route>
              </Switch>
          </Router>
        </div>
      </GlobalProvider>
  )
}

export default App;
