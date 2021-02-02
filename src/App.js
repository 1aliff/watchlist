import React, { useState, useEffect } from 'react';
import getData from './api/index'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/Searchbar/SearchBar'

// import { GlobalProvider } from './_context/GlobalState'

import './App.css';

const App = () => {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])

  console.log('current state query', query)
  
  useEffect(() => {
    fetchData()
  }, [query])

  const fetchData = async () => {
    if (query === '') return
    let { results } = await getData(query);
    setResult(results)
  }

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value)
  }

  return (
      <div>
        <Navbar />
        <SearchBar 
          handleChange={handleChange}
          movies={result}
        />
      </div>
  )
}

export default App;
