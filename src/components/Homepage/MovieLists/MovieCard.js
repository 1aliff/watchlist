import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Card, Typography, CardMedia } from '@material-ui/core'

import { GlobalContext } from '../../../_context/GlobalState'

const useStyles = makeStyles(() => ({
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
    backgroundColor: '#CD6155',
    margin: 5
  },
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
            <Button variant="contained" className={classes.addList} onClick={() => addToWatchList(movie)}>ADD TO MY WATCH LIST</Button>
          </div>
        </Card>
      </Grid>
  )
}

export default MovieCard
