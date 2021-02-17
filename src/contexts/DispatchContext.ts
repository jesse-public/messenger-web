import { Action } from "../data/state";
import { Context, Dispatch, createContext } from "react";
import { DispatchUninitializedError } from "./errors";

const uninitializedDispatch: Dispatch<Action> = () => {
  throw new DispatchUninitializedError();
};

export const DispatchContext: Context<Dispatch<Action>> = createContext(uninitializedDispatch);
