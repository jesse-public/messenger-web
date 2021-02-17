import { Recipient } from "../../data/state";
import { useConversation } from "./useConversation";

type UseRecipientThrows = () => Recipient;
export const useRecipientThrows: UseRecipientThrows = () => {
  const { recipient } = useConversation();

  if (recipient == null) {
    throw new Error("recipient is null");
  }

  return recipient;
};
