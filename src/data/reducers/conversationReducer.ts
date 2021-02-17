import { Reducer } from "react";
import {
  CreateConversationAction,
  JoinConversationAction,
  ReceiveMessageAction,
  SendMessageAction,
  SetConversationRecipientAction,
} from "../actions";
import { AppState } from "../state";

export type ConversationAction =
  | CreateConversationAction
  | JoinConversationAction
  | ReceiveMessageAction
  | SendMessageAction
  | SetConversationRecipientAction;

export const conversationReducer: Reducer<AppState["conversation"], ConversationAction> = (state, action) => {
  switch (action.type) {
    case "Conversation.Create":
      return action.conversation;
    case "Conversation.Join":
      return action.conversation;
    case "Conversation.ReceiveMessage":
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case "Conversation.SendMessage":
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case "Conversation.SetRecipient":
      return {
        ...state,
        recipient: action.recipient,
      };
    default:
      return state;
  }
};
