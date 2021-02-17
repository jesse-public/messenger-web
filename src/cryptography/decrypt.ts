type Decrypt = (cipherText: ArrayBuffer, privateDecryptionKey: JsonWebKey) => Promise<string>;
export const decrypt: Decrypt = async (cipherText, privateDecryptionKey) => {
  const privateKey = await crypto.subtle.importKey(
    "jwk",
    privateDecryptionKey,
    { name: "RSA-OAEP", hash: "SHA-256" },
    true,
    ["decrypt"]
  );

  const decrypted = await window.crypto.subtle.decrypt({ name: "RSA-OAEP" }, privateKey, cipherText);

  return new TextDecoder().decode(decrypted);
};
