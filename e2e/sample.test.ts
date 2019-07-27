import {initSocket} from "../src/socket";
import express from "express";
import SocketIOClient from "socket.io-client";
import {Events} from "../src/enum/events";

const PORT = 3000;
const app = express();
const server = app.listen(PORT);

describe("Socket connection test", () => {
  it("should connect to socket", () => {
    initSocket(server);
    const socket = SocketIOClient(`http://localhost:${PORT}`);
    return new Promise(resolve => {
      socket.on(Events.Connect, () => {
        resolve();
      });
    });
  });
});
