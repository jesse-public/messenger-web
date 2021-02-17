type Deserialize = (serialized: string) => Uint8Array;
export const deserialize: Deserialize = (serialized) => {
  const integerComponents = serialized
    .trim()
    .split(",")
    .map((number) => parseInt(number, 10));

  return Uint8Array.from(integerComponents);
};
