import socketIO, {Socket} from "socket.io";
import {Server} from "http";
import {Events} from "../types/enums/events";

export function initSocket(server: Server) {
  const io = socketIO(server);

  io.on(Events.Connect, (socket: Socket) => {
    socket.on(Events.Message, (message: any) => {
      // eslint-disable-next-line no-console
      console.log(message);
    });
  });
}
