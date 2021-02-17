import { useContext } from "react";
import { StateContext } from "../../contexts";
import { CurrentUser } from "../../data/state";

type UseCurrentUser = () => CurrentUser;
export const useCurrentUser: UseCurrentUser = () => {
  const { currentUser } = useContext(StateContext);

  return currentUser;
};
