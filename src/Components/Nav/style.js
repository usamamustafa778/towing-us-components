import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navBar: {
    display: "flex",
    backgroundColor: "#ffc000",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000",
    padding:"5px 0px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "0.25fr 1fr",
    },
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navRight: {
    display: "none",
    alignItems: "center",
    justifyContent: "end",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  logo: {
    height: 50,
    marginLeft:20,
    [theme.breakpoints.up("md")]: {
      height: 60,
    },
  },
  navLink: {
    margin: "0px 20px",
    color: "#101010",
    textDecoration: "none",
    transition: "0.25s",
    "&:hover": {
      color: "#fff",
    },
  },
  serviceLink: {
    display: "flex",
    alignItems: "center",
  },
  menuIcon: {
    display: "block",
    marginRight:"20px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  // Navbar for phone styling
  navBarPhone: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#0009",
    backdropFilter: "blur(8px)",
    position: "fixed",
    top: 0,
    transform: "translateY(-50vh)",
    zIndex: "10",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  displayNav: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#0009",
    backdropFilter: "blur(8px)",
    position: "fixed",
    top: 0,
    zIndex: "10",
    transform: "translateY(0vh)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  closeIcon: {
    height: 18,
    marginTop: 10,
  },
  serviceName: {
    color: "#000",
    textDecoration: "none",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    transition: "0.15s",
    "&:hover": {
      backgroundColor: "#f3f3f3",
    },
  },
}));

export { useStyles };
