import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Input, Grid, Typography } from '@material-ui/core'
import { GlobalContext } from '../../_context/GlobalState'
import getData from '../../api/index'

import MovieCard from './MovieLists/MovieCard'

const useStyles = makeStyles(() => ({
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
  const { watchlists } = useContext(GlobalContext)
  
  useEffect(() => {
    fetchData()
  }, [query])
  
  const fetchData = async () => {
    if (query === '') return
    let { results } = await getData(query);
    setResult(results)
  }
  
  const handleChange = e => setQuery(e.target.value)
  
  let headerTypography
  watchlists.length === 0 
    ? headerTypography = 'I know you are busy, add something to create your list and maybe watch it later 🙂' 
      : headerTypography = 'Great, add more. 😁'

  return (
    <div className={classes.searchWrapper}>
      <Typography variant="h4" component="h3" style={{ opacity: 0.5, align: 'center', marginTop: 25 }} align="center">{headerTypography}</Typography>
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
