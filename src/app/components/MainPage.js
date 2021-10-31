import { makeStyles } from "@mui/styles";
import React from "react";
import ChatArea from "./ChatArea";
import Header from "./Header";
import SideBar from "./SideBar";

function MainPage() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.content}>
        <SideBar className={classes.sideBar} />
        <ChatArea className={classes.chatArea} />
      </div>
    </>
  );
}

const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    height: "95vh",
  },
  sideBar: {
    boxSizing: "border-box",
    display: "flex",
    height: "100vh",
  },
  chatArea: {
    height: "50vh",
  },
}));

export default MainPage;
