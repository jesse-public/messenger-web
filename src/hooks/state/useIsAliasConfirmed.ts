import { useCurrentUser } from "./useCurrentUser";

type UseIsAliasConfirmed = () => boolean;
export const useIsAliasConfirmed: UseIsAliasConfirmed = () => {
  const { alias } = useCurrentUser();

  return alias != null;
};
