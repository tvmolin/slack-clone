import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserId } from "../../features/appSlice";


function Header() {
  const classes = useStyles();
  const currentUser = useSelector(selectUserId);

  return (
    <div className={classes.root}>
      <div className={classes.actions}>Random button</div>
      <div className={classes.searchBar}>
        Current User logged in: {currentUser}
      </div>
      <div>
        
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    height: '4vh',
    display: "flex",
    width: "100%",
    padding: "15px",
    backgroundColor: "rgb(62, 16, 65)",
    color: "white",
    justifyContent: "space-between",
  },
  searchBar: {
    flex: "0.6",
  },
  actions: {
    justifySelf: "flex-end",
    flex: "0.2",
  },
  userSelect: {
    width: "100px",
    marginRight: "100px",
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "white",
  },
}));

export default Header;
