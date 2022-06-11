import {
  Box,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style.js";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function Nav(props) {

  // Fetching Services API
  const url = "http://towing-api.3utilities.com:786/services";
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setServices(res.data);
      console.log(res.data);
    });
  }, []);

  // Displaying Phone Navbar
  const [style, setStyle] = useState("navbarPhone");
  const [toolbarStyle, setToolbarStyle] = useState("toobarStyle");

  // Displaying Navbar for phone
  const changeStyle = () => {
    if (style === "navbarPhone") {
      setStyle("displayNav");
      setToolbarStyle("hideToolbar");
    } else {
      setStyle("navbarPhone");
      setToolbarStyle("toolbarStyle");
    }
  };

  // Using styles from style.js
  const classes = useStyles(props);

  return (
    <React.Fragment>

      {/* Desktop Navbar */}
      <Box className={classes.navBar}>
        <Box className={classes.navLeft}>
          {/* Logo Desktop Screen */}
          <Link to="/">
            <img className={classes.logo} src="/images/logo.png" alt="" />
          </Link>
        </Box>
        
        {/* Desktop Links */}
        <Box className={classes.navRight}>
          <Link to="/" className={classes.navLink}>
            <Typography className={classes.linkText}>Home</Typography>
          </Link>
          <Link to="/about" className={classes.navLink}>
            <Typography className={classes.linkText}>About Us</Typography>
          </Link>
          <Link to="/services" className="nav__link">
            <Typography className="nav__item">Services</Typography>
            <Box className="nav__dropDown">
              {services.map((val, key) => {
                return (
                  <Link to={val.route} className={classes.serviceName}>
                    <ManageAccountsIcon />
                    <Typography className="service">{val.name}</Typography>
                  </Link>
                );
              })}
            </Box>
          </Link>
        </Box>
        <img
          onClick={() => changeStyle()}
          className={classes.menuIcon}
          src="/images/icons/menuIcon.png"
          alt=""
        />
      </Box>

      {/* Navbar For Small Screen */}
      <Box className={style}>
        <Box className={classes.navHeader}>
          {/* Logo Small Screen */}
          <Link to="/">
            <img className={classes.logo} src="/images/logo.png" alt="" />
          </Link>
          <Link to="/" onClick={() => changeStyle()}>
            <img
              className={classes.closeIcon}
              src="/images/icons/crossIcon.png"
              alt=""
            />
          </Link>
        </Box>
        <br />
        <br />

        {/*  Nav Small Links  */}
        <Box className="phoneLandscape">
          <Box className="navLinksPhone">
            <Link to="/" className="nav__link__phone">
              <Typography>Home</Typography>
            </Link>
            <Link to="/about" className="nav__link__phone">
              <Typography>About Us</Typography>
            </Link>
            <Link to="/services" className="nav__link__phone">
              <Typography className="nav__item">Services</Typography>
              <Box className="nav__dropDown__phone">
                {services.map((val, key) => {
                  return (
                    <Link
                      to={val.route}
                      key={key}
                      className={classes.serviceName}
                    >
                      <ManageAccountsIcon />
                      <Typography>{val.name}</Typography>
                    </Link>
                  );
                })}
              </Box>
            </Link>
            <Link to="/findlocation" className="nav__link__phone">
              <Typography>Find your location</Typography>
            </Link>
          </Box>

          {/* Search Bar */}  
          <Box className={classes.searchBar}>
            <SearchBar placeholder="Search Location..." />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
