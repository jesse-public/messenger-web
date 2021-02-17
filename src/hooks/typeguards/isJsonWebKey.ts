type IsJsonWebKey = (key: unknown) => key is JsonWebKey;
export const isJsonWebKey: IsJsonWebKey = (key): key is JsonWebKey =>
  (typeof (key as JsonWebKey).kty === "string" && typeof (key as JsonWebKey).alg === "string") ||
  (typeof (key as JsonWebKey).kty === "string" && typeof (key as JsonWebKey).crv === "string");
