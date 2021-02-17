type Serialize = (deserialized: ArrayBuffer) => string;
export const serialize: Serialize = (deserialized) => new Uint8Array(deserialized).toString();
