import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
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
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" className={classes.link}>Watchlist</NavLink>
          </Typography>
          <NavLink to="/watchlist" className={classes.link} activeStyle={{ fontWeight: '900' }}>My Watchlist</NavLink> |
          <NavLink to="/watched" className={classes.link} activeStyle={{ fontWeight: '900' }}>Watched</NavLink>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar