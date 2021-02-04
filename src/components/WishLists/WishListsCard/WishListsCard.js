import React, { useState } from 'react'
import { Grid, Card, CardMedia, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
    backgroundColor: '#0099ff',
    margin: 5
  },
  addWatched: {
    color: '#fff',
    backgroundColor: '#006bb3',
    margin: 5
  }
}));

const WishListsCard = ({ watchlist }) => {
  const classes = useStyles()

  return (
    <>
      <Grid item spacing={4}>
      <Card className={classes.root}>
        {/* <CardActionArea> */}
            <CardMedia
                className={classes.media}
                image={`https://image.tmdb.org/t/p/w200${watchlist.poster_path}`}
                title={`Photo By ${watchlist.original_title}`}
            />
            <Typography gutterBottom variant="h6" component="h2" align="center" className={classes.cardInfo}>
              {watchlist.original_title}
            </Typography>
            <Typography gutterBottom variant="h7" component="h2" align="center" className={classes.cardInfo}>
              {watchlist.release_date}
            </Typography>
        {/* </CardActionArea> */}
        <div align="center">
          <Button variant="contained" className={classes.addList} onClick={() => console.log('aiyaya')}>ADD</Button>
          <Button variant="contained" className={classes.addWatched} onClick={() => console.log('add to watched')}>WATCHED</Button>
        </div>
      </Card>
    </Grid>
    </>
  )
}

export default WishListsCard
