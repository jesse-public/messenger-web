import { ConnectionOpts } from "./types";
import WebSocketConnection from "./WebSocketConnection";

const connections: Record<string, WebSocketConnection> = {};

type GetConnection = (opts: ConnectionOpts) => WebSocketConnection;
export const getConnection: GetConnection = (opts) => {
  if (!connections[opts.connectionUrl]) {
    connections[opts.connectionUrl] = new WebSocketConnection(opts);
  }

  return connections[opts.connectionUrl];
};
