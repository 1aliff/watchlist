import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, CardActions, Button, Card, CardActionArea, CardHeader, CardContent, Typography, CardMedia } from '@material-ui/core'
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 260,
  },
  media: {
    width: 260,
    height: 380
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  // const [saved, setSaved] = useState(false)

  return (
    <Grid
      container
      justify="center"
      spacing={4}
    >
      <Grid item spacing={3}>
        <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        title={`Photo By ${movie.original_title}`}
                    />
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      {movie.original_title}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="h2" align="center">
                      {movie.release_date}
                    </Typography>
                    <Button onClick={() => console.log('add to wishlist')}>WATCH LIST</Button>
                    <Button onClick={() => console.log('add to watched')}>WATCHED</Button>
                </CardActionArea>
            </Card>
      </Grid>
    </Grid>
  )
}

export default MovieCard
