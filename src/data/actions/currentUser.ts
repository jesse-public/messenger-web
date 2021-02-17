import { Action, JsonWebKeySet } from "../state";

export interface SetAliasAction extends Action {
  readonly alias: string;
  readonly type: "CurrentUser.SetAlias";
}

export const setAlias = (alias: string): SetAliasAction => ({
  type: "CurrentUser.SetAlias",
  alias,
});

export interface SetKeySetAction extends Action {
  readonly keySet: JsonWebKeySet;
  readonly type: "CurrentUser.SetKeySet";
}

export const setKeySet = (keySet: JsonWebKeySet): SetKeySetAction => ({
  keySet,
  type: "CurrentUser.SetKeySet",
});
