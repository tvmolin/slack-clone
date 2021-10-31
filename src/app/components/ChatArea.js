import { Button, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useInterval from "@use-it/interval";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "use-http";
import { selectRoomId, selectUserId } from "../../features/appSlice";
import Message from "./Message";

function ChatArea() {
  const classes = useStyles();

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const roomId = useSelector(selectRoomId);
  const currentUser = useSelector(selectUserId);

  const url = `/groups/${roomId}/messages`;
  const { get, post, response } = useFetch("http://localhost:3004", {
    cachePolicy: "no-cache",
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!roomId) return;

    await post(url, {
      content: message,
      userId: currentUser,
    });
    fetchMessages();
    setMessage("");
  };

  useEffect(() => {
    fetchMessages();
  }, [roomId]);

  const fetchMessages = async () => {
    const data = await get(url);
    if (response.ok) setMessages(data);
  };

  useInterval(fetchMessages, 1000);

  return (
    <div className={classes.root}>
      <div className={classes.roomName}>
        You are currently in group: {roomId}
      </div>
      <div className={classes.messages}>
        {messages.map((message) => (
          <Message message={message} />
        ))}
      </div>
      <div className={classes.inputArea}>
        <form>
          <Input
          className={classes.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type={"text"}
            placeholder={"Send a message to this chat"}
          />
          <Button hidden type="submit" onClick={sendMessage} />
        </form>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    justifyContent: "space-between",
    backgroundColor: "rgb(37, 37, 38)",
    color: "white",
  },
  roomName: {
    flex: "0.1",
    borderBottom: "3px solid black",
  },
  messages: {
    flex: "0.8",
    padding: "30px",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  inputArea: {
    display: "flex",
    flex: "0.16",
    borderTop: "3px solid black",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: '100%',
    backgroundColor: "white",
    color: "white",
  },
}));

export default ChatArea;
