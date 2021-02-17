type Sign = (message: string, privateSigningKey: JsonWebKey) => Promise<ArrayBuffer>;
export const sign: Sign = async (message, privateSigningKey) => {
  const privateKey = await crypto.subtle.importKey(
    "jwk",
    privateSigningKey,
    { name: "ECDSA", namedCurve: "P-384" },
    true,
    ["sign"]
  );

  const encodedMessage = new TextEncoder().encode(message);

  return await window.crypto.subtle.sign(
    {
      name: "ECDSA",
      hash: { name: "SHA-384" },
    },
    privateKey,
    encodedMessage
  );
};
