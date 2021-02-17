import { Reducer } from "react";
import { SetAliasAction, SetKeySetAction } from "../actions";
import { AppState } from "../state";

export type CurrentUserAction = SetAliasAction | SetKeySetAction;

export const currentUserReducer: Reducer<AppState["currentUser"], CurrentUserAction> = (state, action) => {
  switch (action.type) {
    case "CurrentUser.SetAlias":
      return {
        ...state,
        alias: action.alias,
      };
    case "CurrentUser.SetKeySet":
      return {
        ...state,
        keySet: action.keySet,
      };
    default:
      return state;
  }
};
