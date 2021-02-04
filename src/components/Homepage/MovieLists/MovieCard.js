import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Card, Typography, CardMedia } from '@material-ui/core'

import { GlobalContext } from '../../../_context/GlobalState'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    height: 515,
  },
  media: {
    width: 280,
    height: 380
  },
  cardInfo: {
    marginTop: 10,
    fontSize: 16,
  },
  addList: {
    color: '#fff',
    backgroundColor: '#0099ff',
    margin: 5
  },
  addWatched: {
    color: '#fff',
    backgroundColor: '#006bb3',
    margin: 5
  }
}));

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  const { addToWatchList } = useContext(GlobalContext) // take out our add function

  return (
      <Grid item spacing={4}>
        <Card className={classes.root}>
          {/* <CardActionArea> */}
              <CardMedia
                  className={classes.media}
                  image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  title={`Photo By ${movie.original_title}`}
              />
              <Typography gutterBottom variant="h6" component="h2" align="center" className={classes.cardInfo}>
                {movie.original_title}
              </Typography>
              <Typography gutterBottom variant="h7" component="h2" align="center" className={classes.cardInfo}>
                {movie.release_date}
              </Typography>
          {/* </CardActionArea> */}
          <div align="center">
            <Button variant="contained" className={classes.addList} onClick={() => addToWatchList(movie)}>ADD TO WATCH LIST</Button>
            {/* <Button variant="contained" className={classes.addWatched} onClick={() => console.log('add to watched')}>WATCHED</Button> */}
          </div>
        </Card>
      </Grid>
  )
}

export default MovieCard
