export type OnEncryptedMessage = (cipherText: string) => void;

export interface ConnectionOpts {
  readonly connectionUrl: string;
}

export interface Connection {
  close(): void;
  listen(onEncryptedMessage: OnEncryptedMessage): void;
  send(encryptedMessage: ArrayBuffer): void;
}
