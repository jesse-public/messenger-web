type Encrypt = (encodedSignedMessage: ArrayBuffer, publicEncryptionKey: JsonWebKey) => Promise<ArrayBuffer>;
export const encrypt: Encrypt = async (encodedSignedMessage, publicEncryptionKey) => {
  const publicKey = await crypto.subtle.importKey(
    "jwk",
    publicEncryptionKey,
    { name: "RSA-OAEP", hash: "SHA-256" },
    true,
    ["encrypt"]
  );

  return await window.crypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, encodedSignedMessage);
};
