import React, { useContext } from 'react'
import { Grid, Card, CardMedia, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../../../_context/GlobalState.js'

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
  deleted: {
    color: '#fff',
    backgroundColor: '#922B21',
    margin: 5
  }
}));

const SeenListsCard = ({ seenlists }) => {
  const classes = useStyles()
  const { deleteSeenList } = useContext(GlobalContext)

  return (
    <>
      <Grid item spacing={4}>
        <Card className={classes.root}>
              <CardMedia
                  className={classes.media}
                  image={`https://image.tmdb.org/t/p/w200${seenlists.poster_path}`}
                  title={`Photo By ${seenlists.original_title}`}
              />
              <Typography gutterBottom variant="h6" component="h2" align="center" className={classes.cardInfo}>
                {seenlists.original_title}
              </Typography>
              <Typography gutterBottom variant="h7" component="h2" align="center" className={classes.cardInfo}>
                {seenlists.release_date}
              </Typography>
          <div align="center">
            <Button variant="contained" className={classes.deleted} onClick={() => deleteSeenList(seenlists.id)}>DELETE</Button>
          </div>
        </Card>
     </Grid>
    </>
  )
}

export default SeenListsCard
