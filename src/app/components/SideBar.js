import React from "react";
import useFetch from "use-http";
import { makeStyles } from "@mui/styles";
import SideBarGroup from "./SideBarGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { changeCurrentUser, selectUserId } from "../../features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel } from "@mui/material";

function SideBar() {
  const classes = useStyles();
  const {
    data = [],
  } = useFetch("http://localhost:3004/groups", {}, []);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserId);
  const changeUser = (e) => {
    if (!e.target.value) return;

    dispatch(changeCurrentUser({ userId: e.target.value }));
  };


  return (
    <div className={classes.root}>
      <InputLabel id="change-user-label-id">Current User</InputLabel>
      <Select
        labelId="change-user-label-id"
        id="demo-simple-select-helper"
        className={classes.userSelect}
        value={currentUser}
        label="Current User"
        onChange={changeUser}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
      </Select>
      {data.map((group) => (
        <SideBarGroup key={group.id} group={group} />
      ))}
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: "10%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(62, 16, 65)",
    color: "white",
    padding: "45px",
  },
}));

export default SideBar;
