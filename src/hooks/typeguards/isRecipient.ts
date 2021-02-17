import { Recipient } from "../../data/state";
import { isJsonWebKey } from "./isJsonWebKey";

type IsRecipient = (recipient: unknown) => recipient is Recipient;
export const isRecipient: IsRecipient = (recipient): recipient is Recipient =>
  typeof (recipient as Recipient)?.alias === "string" &&
  isJsonWebKey((recipient as Recipient)?.publicEncryptionKey) &&
  isJsonWebKey((recipient as Recipient)?.publicVerificationKey);
