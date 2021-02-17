import { Reducer } from "react";
import { Action, AppState } from "../state";
import { ConversationAction, conversationReducer } from "./conversationReducer";
import { CurrentUserAction, currentUserReducer } from "./currentUserReducer";

export type AppAction = ConversationAction | CurrentUserAction | Action;

export const rootReducer: Reducer<AppState, AppAction> = (state, action) => ({
  ...state,
  conversation: conversationReducer(state.conversation, action as ConversationAction),
  currentUser: currentUserReducer(state.currentUser, action as CurrentUserAction),
});
