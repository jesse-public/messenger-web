import { encrypt } from "./encrypt";
import { serialize } from "./serialize";
import { sign } from "./sign";
import { SignedMessage } from "./types";

type SignThenEncrypt = (
  message: string,
  publicEncryptionKey: JsonWebKey,
  privateSigningKey: JsonWebKey
) => Promise<string>;
export const signThenEncrypt: SignThenEncrypt = async (message, publicEncryptionKey, privateSigningKey) => {
  const signature = await sign(message, privateSigningKey);
  const signedMessage: SignedMessage = {
    signature: serialize(signature),
    message,
  };

  const encodedSignedMessage = new TextEncoder().encode(JSON.stringify(signedMessage));

  const encrypted = await encrypt(encodedSignedMessage, publicEncryptionKey);

  return serialize(encrypted);
};
