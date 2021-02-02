import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    margin: 10
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>Watchlist</Link>
          </Typography>
          <Link to="/wishlist" className={classes.link}>My Watch List</Link> |
          <Link to="/watched" className={classes.link}>Watched</Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar