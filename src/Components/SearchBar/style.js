import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    searchBar: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ffff",
        justifyContent: "between",
        borderRadius: "100px",
        padding: 12,
        width: 300,
        marginTop: 20,
        color: "#000",
        [theme.breakpoints.up("lg")]: {
          width: 400,
        },
      },
      searchInput: {
        outline: "none",
        border: "none",
        width: "90%",
        marginLeft: 10,
        height: "100%",
        fontSize: "18px",
      },
      dataResult: {
        width: 300,
        maxHeight: 250,
        position: "absolute",
        borderRadius: 20,
        textAlign: "left",
        backgroundColor: "#ffff",
        boxShadow: "#0009 0px 2px 10px",
        marginTop: 5,
        color: "#000",
        overflowX: "hidden",
        overflowY: "auto",
        [theme.breakpoints.up("lg")]: {
          width: 400,
        },
      },
      searchImg: {
        height: "60px",
        marginRight: 8,
        borderRadius: 5,
      },
      dataService: {
        color: "gray",
        fontSize: 12,
      },
      dataItem: {},
      dataLink: {
        color: "#000",
        textDecoration: "none",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderBottom: "1px solid #f3f3f3",
        "&:hover": {
          backgroundColor: "#f3f3f3",
        },
      },
      CloseIcon: {
        cursor: "pointer",
      },
}));

export { useStyles };