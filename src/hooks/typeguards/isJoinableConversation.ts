import { Recipient } from "../../data/state";
import { isRecipient } from "./isRecipient";

export interface JoinableConversation {
  readonly connectionUrl: string;
  readonly recipient: Recipient;
}

type IsJoinableConversation = (joinableConversation: unknown) => joinableConversation is JoinableConversation;
export const isJoinableConversation: IsJoinableConversation = (
  joinableConversation
): joinableConversation is JoinableConversation =>
  isRecipient((joinableConversation as JoinableConversation)?.recipient) &&
  typeof (joinableConversation as JoinableConversation).connectionUrl === "string";
