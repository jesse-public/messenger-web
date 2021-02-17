interface EncryptedMessageData {
  readonly cipherText: string;
}

export const isEncryptedMessageData = (data: unknown): data is EncryptedMessageData =>
  typeof (data as EncryptedMessageData)?.cipherText === "string";
