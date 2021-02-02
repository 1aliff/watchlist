import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import getData from '../../api/index'
import { Input, Grid } from '@material-ui/core'

import MovieCard from '../MovieLists/MovieCard'

const useStyles = makeStyles((theme) => ({
  root : {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
  },
  searchBar: {
    margin: 'auto',
    width: '90%',
    padding: 10,
    paddingTop: 25,
  },
  inputSearch: {
    paddingLeft: '20px', // for placeholder
    paddingRight: '20px', // for placeholder
    width: '100%',
    height: '60px',
    color: 'black',
    background: '#eee',
    borderRadius: '10px',
  },
  searchWrapper: {
    padding: 10,
    width: '80%',
    margin: 'auto',
  }
}));

const Homepage = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    fetchData()
  }, [query])

  const fetchData = async () => {
    if (query === '') return
    let { results } = await getData(query);
    setResult(results)
  }

  const handleChange = e => setQuery(e.target.value)
  
  return (
    <div className={classes.searchWrapper}>
      <div className={classes.searchBar}>
        <form autoComplete="off">
            <Input
              className={classes.inputSearch}
              disableUnderline={true}
              placeholder="Search movie to watch"
              onChange={handleChange}
            />
        </form>
      </div>
        <Grid
          container
          justify="center"
          spacing={3}
          direction="row"
        >
          {
            result.map((movie) => (
              <MovieCard 
                movie={movie}
              />
            ))
          }
          </Grid>
    </div>
  )
}

export default Homepage
