import { Recipient } from "../../data/state";
import { useConversation } from "./useConversation";

type UseRecipient = () => Recipient | null;
export const useRecipient: UseRecipient = () => {
  const { recipient } = useConversation();

  return recipient ?? null;
};
