import {initSocket} from "../src/socket";
import express from "express";
import SocketIOClient from "socket.io-client";
import {Events} from "../src/enum/events";
import {MockEnv} from "../tests/test_utils";

const app = express();
const server = app.listen(MockEnv.PORT);

describe("Socket connection test", () => {
  it("should connect to socket", () => {
    initSocket(server);
    const socket = SocketIOClient(`http://localhost:${MockEnv.PORT}`);
    return new Promise(resolve => {
      socket.on(Events.Connect, () => {
        resolve();
      });
    });
  });
});
