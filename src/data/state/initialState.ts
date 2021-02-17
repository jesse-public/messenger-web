import { AppState } from "./types";

export const initialState: AppState = {
  conversation: {
    connectionUrl: null,
    messages: [],
    recipient: null,
  },
  currentUser: {
    alias: null,
    keySet: null,
  },
};
