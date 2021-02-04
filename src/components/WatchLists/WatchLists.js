import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../../_context/GlobalState'
import WatchListsCard from './WatchListsCard/WatchListsCard'

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 20,
  }
}));


const WatchLists = () => {
  const classes = useStyles()
  const { watchlists } = useContext(GlobalContext) // take out state

  return (
    <div className={classes.root}>
      <Grid
          container
          justify="center"
          spacing={3}
          direction="row"
        >
        {
          watchlists.map(watchlist => (
            <WatchListsCard
              watchlist={watchlist}
            />
            ))
          }
      </Grid>
    </div>
  )
}

export default WatchLists
