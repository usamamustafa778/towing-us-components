import React, { useState } from "react";
import { useStyles } from "./style.js";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SearchBar({placeholder}) {

  const url = "http://towing-api.3utilities.com:786/search?_sk=";
  const [search, setSearch] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  // const [time, setTimer] = useState(false);

  const callApi = () => {
      axios.get(url + wordEntered).then((res) => {
        setSearch(res.data);
        console.log("Search");
        console.log(res.data);
      });
  };

  const handleFilter = (event) => {
    callApi();
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = search.filter((value) => {
      return value.city_name.toLowerCase().includes(searchWord.toLowerCase());
    });
    
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.searchBar}>
        <input
          className={classes.searchInput}
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={classes.searchIcon}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon className={classes.CloseIcon} onClick={clearInput} />
          )}
        </div>
      </Box>
      {filteredData.length != 0 && (
        <Box className={classes.dataResult}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link className={classes.dataLink} to={value.city_route}>
                <img
                  className={classes.searchImg}
                  src="https://static.toiimg.com/thumb/msid-77416935,width-900,height-1200,resizemode-6.cms"
                  alt=""
                />
                <Box className={classes.dataItem}>
                  <Typography>
                    {value.state_name}, {value.city_name}
                  </Typography>
                  <Typography className={classes.dataService}>
                    {value.service_name}{" "}
                  </Typography>
                </Box>
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
