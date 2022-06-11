import { Box, Typography } from "@material-ui/core";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";
import "./nav.css"

export default function Nav({services}) {
  return (
    <>
      <Box className="navBar">
        <Box className="navLeft">
          {/* Logo */}
          <Link to="/">
            <img className="logo" src="/images/logo.png" alt="" />
          </Link>
        </Box>

        {/* Desktop Links */}
        <Box className="navRight">
          <Link to="/" className="navLink">
            <Typography className="linkText">Home</Typography>
          </Link>
          <Link to="/about" className="navLink">
            <Typography className="linkText">About Us</Typography>
          </Link>
          <Link to="/services" className="navlink nav__link">
            <Typography className="nav__item">Services</Typography>
            <Box className="nav__dropDown">
              {services.map((val, key) => {
                return (
                  <Link to={val.route} className="serviceName">
                    <ManageAccountsIcon />
                    <Typography>{val.name}</Typography>
                  </Link>
                );
              })}
            </Box>
          </Link>
        </Box>
        <img
          className="menuIcon"
          src="/images/icons/menuIcon.png"
          alt=""
        />
      </Box>
    </>
  );
}