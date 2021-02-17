import { isEncryptedMessageData } from "./isEncryptedMessageData";
import { Connection, ConnectionOpts, OnEncryptedMessage } from "./types";

export default class WebSocketConnection implements Connection {
  private readonly webSocket: WebSocket;

  constructor({ connectionUrl }: ConnectionOpts) {
    this.webSocket = new WebSocket(connectionUrl);
  }

  public close(): void {
    this.webSocket.close();
  }

  public listen(onEncryptedMessage: OnEncryptedMessage): void {
    this.webSocket.onmessage = ({ data }: MessageEvent<unknown>) => {
      if (!isEncryptedMessageData(data)) {
        return;
      }

      onEncryptedMessage(data.cipherText);
    };
  }

  public send(encryptedMessage: ArrayBuffer): void {
    this.webSocket.send(encryptedMessage);
  }
}
