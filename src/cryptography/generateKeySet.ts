import { JsonWebKeySet } from "../data/state";

const extractable = true;

export const generateKeySet = async (): Promise<JsonWebKeySet> => {
  const encryptDecrypt = await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 6000,
      // largest known Fermat prime (https://en.wikipedia.org/wiki/65,537)
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    extractable,
    ["encrypt", "decrypt"]
  );

  const signVerify = await window.crypto.subtle.generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-384",
    },
    extractable,
    ["sign", "verify"]
  );

  const privateDecryptionKey = await crypto.subtle.exportKey("jwk", encryptDecrypt.privateKey);
  const publicEncryptionKey = await crypto.subtle.exportKey("jwk", encryptDecrypt.publicKey);
  const privateSigningKey = await crypto.subtle.exportKey("jwk", signVerify.privateKey);
  const publicVerificationKey = await crypto.subtle.exportKey("jwk", signVerify.publicKey);

  return {
    privateDecryptionKey,
    privateSigningKey,
    publicEncryptionKey,
    publicVerificationKey,
  };
};
