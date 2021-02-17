import { JsonWebKeySet } from "../../data/state";
import { useCurrentUser } from "./useCurrentUser";

type UseKeySetThrows = () => JsonWebKeySet;
export const useKeySetThrows: UseKeySetThrows = () => {
  const { keySet } = useCurrentUser();

  if (keySet == null) {
    throw new Error("keySet is null");
  }

  return keySet;
};
