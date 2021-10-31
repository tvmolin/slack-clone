import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserId } from "../../features/appSlice";

function Message({ message }) {
  const userId = useSelector(selectUserId);
  const classes = useStyles();
  return (
    <div
      className={
        userId === message.userId
          ? classes.myMessageContainer
          : classes.otherMessageContainer
      }
    >
      <div
        className={`${classes.message} ${
          userId === message.userId ? classes.myMessage : classes.otherMessage
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  message: {
    width: "fit-content",
    padding: "12px",
    margin: "5px",
  },
  myMessageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  myMessage: {
    backgroundColor: 'grey'
  },
  otherMessage: {
    backgroundColor: 'mediumvioletred'
  },
}));

export default Message;
