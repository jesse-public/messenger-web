import { Action, Conversation, Recipient } from "../state";

export interface CreateConversationAction extends Action {
  readonly conversation: Conversation;
  readonly type: "Conversation.Create";
}

export const createConversation = (connectionUrl: string): CreateConversationAction => ({
  conversation: {
    connectionUrl,
    messages: [],
    recipient: null,
  },
  type: "Conversation.Create",
});

export interface JoinConversationAction extends Action {
  readonly conversation: Conversation;
  readonly type: "Conversation.Join";
}

export const joinConversation = (connectionUrl: string, recipient: Recipient): JoinConversationAction => ({
  conversation: {
    connectionUrl,
    messages: [],
    recipient,
  },
  type: "Conversation.Join",
});

export interface ReceiveMessageAction extends Action {
  readonly message: string;
  readonly type: "Conversation.ReceiveMessage";
}

export const receiveMessage = (message: string): ReceiveMessageAction => ({
  message,
  type: "Conversation.ReceiveMessage",
});

export interface SendMessageAction extends Action {
  readonly message: string;
  readonly type: "Conversation.SendMessage";
}

export const sendMessage = (message: string): SendMessageAction => ({
  message,
  type: "Conversation.SendMessage",
});

export interface SetConversationRecipientAction extends Action {
  readonly recipient: Recipient;
  readonly type: "Conversation.SetRecipient";
}

export const setConversationRecipient = (recipient: Recipient): SetConversationRecipientAction => ({
  recipient,
  type: "Conversation.SetRecipient",
});
