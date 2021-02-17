import { SignedMessage } from "./types";

export const isSignedMessage = (message: unknown): message is SignedMessage =>
  typeof (message as SignedMessage).message === "string" && typeof (message as SignedMessage).signature === "string";
