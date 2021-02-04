import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { GlobalContext } from '../../_context/GlobalState'
import SeenListsCard from './SeenListsCard/SeenListsCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 20,
  }
}));

const SeenLists = () => {
  const classes = useStyles()
  const { seenlists } = useContext(GlobalContext)
  
  return (
    <div className={classes.root}>
      <Grid
          container
          justify="center"
          spacing={3}
          direction="row"
        >
        {
          seenlists.map(seenlist => (
            <SeenListsCard
              seenlists={seenlist}
            />
            ))
        }
      </Grid>
    </div>
  )
}

export default SeenLists
