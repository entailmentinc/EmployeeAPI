import React from 'react';
import { logout } from './../../actions/login.action'
import logo from './../../assets/images/logo.png'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

const Navbar = () => {
    return (
      <div className="header">
      <img className="img_logo" src={logo} alt="STPL" />
      <div className="header-right">
        <a className="active" href="#">Home</a>
        <a className="#">Add New</a>
        <a onClick={logout} className="id_logout" href="#">Logout</a>
      </div>
    </div>
    );
};

export default Navbar;
