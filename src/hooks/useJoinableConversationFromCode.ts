import { useMemo } from "react";
import { isJoinableConversation, JoinableConversation } from "./typeguards/isJoinableConversation";

type UseJoinableConversationFromCode = (code: string) => JoinableConversation | null;
export const useJoinableConversationFromCode: UseJoinableConversationFromCode = (code) =>
  useMemo(() => {
    let joinableConversation: unknown;

    try {
      joinableConversation = JSON.parse(atob(code));
    } catch (error) {
      return null;
    }

    if (!isJoinableConversation(joinableConversation)) {
      return null;
    }

    return joinableConversation;
  }, [code]);
