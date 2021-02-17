import { isSignedMessage } from "./isSignedMessage";
import { SignedMessage } from "./types";

type ParseSignedMessage = (signedMessage: string) => SignedMessage | null;
export const parseSignedMessage: ParseSignedMessage = (signedMessage) => {
  let parsedMessage: unknown;

  try {
    parsedMessage = JSON.parse(signedMessage);
  } catch (e) {
    return null;
  }

  if (!isSignedMessage(parsedMessage)) {
    return null;
  }

  return parsedMessage;
};
