import React, { useContext } from 'react'
import { Grid, Card, CardMedia, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
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
  seenIt: {
    color: '#fff',
    backgroundColor: '#CD6155',
    margin: 5
  },
  deleteIt: {
    color: '#fff',
    backgroundColor: '#922B21',
    margin: 5
  }
}));

const WatchListsCard = ({ watchlist }) => {
  const classes = useStyles()
  const { deleteWatchList, addToSeenList } = useContext(GlobalContext)

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
            <Button variant="contained" className={classes.seenIt} onClick={() => addToSeenList(watchlist)}>MARK AS SEEN</Button>
            <Button variant="contained" className={classes.deleteIt} onClick={() => deleteWatchList(watchlist.id)}>DELETE</Button>
          </div>
        </Card>
     </Grid>
    </>
  )
}

export default WatchListsCard
