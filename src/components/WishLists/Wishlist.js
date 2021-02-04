import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'

import { GlobalContext } from '../../_context/GlobalState'
import WatchListsCard from './WishListsCard/WishListsCard'

const Wishlist = () => {
  const { watchlists } = useContext(GlobalContext) // take out our add function

  console.log(watchlists)
  return (
    <>
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
    </>
  )
}

export default Wishlist
