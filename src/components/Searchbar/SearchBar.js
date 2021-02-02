import React from 'react'
import { Input, Grid, Card, CardContent, Typography, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
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
    // height: 200,
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
    marginBottom: 20, // between searchbox and chips
    color: 'black',
    background: '#eee',
    borderRadius: '10px',
  },
}));

const SearchBar = ({ handleChange, movies }) => {
  const classes = useStyles();

  return (
    <>
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
            {
              movies.map((movie) => (
                <MovieCard 
                  movie={movie}
                />
              ))
            }        
    </>
  )
}
export default SearchBar
