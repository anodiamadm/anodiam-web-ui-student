import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import './AnodiamNavbar.css';
import { AuthContext } from "../../../contexts/AuthContext";

const AnodiamNavbar = () => {
  const { authObj, dispatch } = useContext(AuthContext);
  const doLogout = () => {
    let confLogout = window.confirm("Are you sure to Log Out?");
    if (confLogout===true) {
      dispatch({type: 'LOGOUT', authObj: {email: '', authProvider: '', given_name: '', family_name: '', JWT: '', expires_on: '', valid: false}});
    }
  }
  return (
    <nav className="navbar navbar-expand-md anodiam-navbar">
      <Link to="/">
        <img src={ process.env.PUBLIC_URL + '/resources/images/AnodiamEnergyLogo.png' } alt='A' /><h1>nodiam</h1>
      </Link>

      <button
        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
        <i className="fas fa-bars burger-icon"></i>
      </button>
      <div className="collapse navbar-collapse links" id="navbarSupportedContent">
        {
          authObj.valid===false ?
            <ul className="navbar-nav">
              <li ><Link className="anodiam-nav-link" to="/">Login</Link></li>
              <li ><Link className="anodiam-nav-link" to="/register">Register</Link></li>
            </ul> :
            <ul className="navbar-nav">
              <li ><Link className="anodiam-nav-link" to="/buyCourses">Buy Courses</Link></li>
              <li ><Link className="anodiam-nav-link" to="/profile">My Profile</Link></li>
              <li ><Link className="anodiam-nav-link" to="/learning">My Learning</Link></li>
              <li ><Link className="anodiam-nav-link" onClick={doLogout} to="/">Logout</Link></li>
            </ul>
        }
      </div>
    </nav>
  )
};
 
export default AnodiamNavbar;