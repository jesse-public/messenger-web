import { Context, createContext } from "react";
import { AppState, initialState as uninitializedState } from "../data/state";

export const StateContext: Context<AppState> = createContext(uninitializedState);
