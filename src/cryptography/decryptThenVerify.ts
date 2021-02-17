import { decrypt } from "./decrypt";
import { deserialize } from "./deserialize";
import { parseSignedMessage } from "./parseSignedMessage";
import { verify } from "./verify";

type DecryptThenVerify = (
  cipherText: string,
  publicVerificationKey: JsonWebKey,
  privateDecryptionKey: JsonWebKey
) => Promise<string>;
export const decryptThenVerify: DecryptThenVerify = async (cipherText, publicVerificationKey, privateDecryptionKey) => {
  const deserializedChipher = deserialize(cipherText);

  const decrypted = await decrypt(deserializedChipher, privateDecryptionKey);
  const signedMessage = parseSignedMessage(decrypted);

  if (!signedMessage) {
    throw new Error("Message could not be parsed");
  }

  const doesSignatureMatchSender = await verify(signedMessage, publicVerificationKey);

  if (!doesSignatureMatchSender) {
    throw new Error("Signature of received message does not match sender");
  }

  return signedMessage.message;
};
