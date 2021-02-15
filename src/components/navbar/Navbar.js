import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { logout } from './../../actions/login.action'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/users"  style={{color:'white'}}>
                User List
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/users/add" style={{color:'white' }}>
                Add User 
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link onClick={logout} style={{marginLeft: '1000px', color:'white' }}>
                Logout 
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
        </>
    );
};

export default Navbar;
