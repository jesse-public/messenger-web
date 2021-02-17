import { useCurrentUser } from "./useCurrentUser";

type UseIsKeySetInitialized = () => boolean;
export const useIsKeySetInitialized: UseIsKeySetInitialized = () => {
  const { keySet } = useCurrentUser();

  return keySet != null;
};
