import { deserialize } from "./deserialize";
import { SignedMessage } from "./types";

type Verify = (signedMessage: SignedMessage, publicVerificationKey: JsonWebKey) => Promise<boolean>;
export const verify: Verify = async ({ message, signature }, publicVerificationKey) => {
  const publicKey = await crypto.subtle.importKey(
    "jwk",
    publicVerificationKey,
    { name: "ECDSA", namedCurve: "P-384" },
    true,
    ["verify"]
  );

  const encodedMessage = new TextEncoder().encode(message);

  const deserializedSignature = deserialize(signature);

  return await window.crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-384" },
    },
    publicKey,
    deserializedSignature,
    encodedMessage
  );
};
