import { useContext } from "react";
import { StateContext } from "../../contexts";
import { Conversation } from "../../data/state";

type UseConversation = () => Conversation;
export const useConversation: UseConversation = () => {
  const { conversation } = useContext(StateContext);

  return conversation;
};
