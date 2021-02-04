import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, Badge } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.PNG'
import { GlobalContext } from '../../_context/GlobalState'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: '#DC143C',
  },
  link: {
    textDecoration: 'none',
    color: '#DC143C',
  },
  link_two: {
    textDecoration: 'none',
    color: '#DC143C',
    marginLeft: 10,
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const { watchlists } = useContext(GlobalContext)

  const total = watchlists.length

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ background: '#fff' }}>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" className={classes.link}>Watchlist</NavLink>
            <img src={Logo} style={{ height: 50, width: 50, marginTop: 5 }} alt="fireSpot"/>
          </Typography>
          <Badge badgeContent={total} color="error">
            <NavLink to="/watchlist" className={classes.link} activeStyle={{ fontWeight: '750' }}>My Watchlist</NavLink>
          </Badge>
          <Typography style={{ marginLeft : 15, color: '#DC143C' }}> | </Typography>
          <NavLink to="/seenlist" className={classes.link_two} activeStyle={{ fontWeight: '750' }}> Seen</NavLink>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar