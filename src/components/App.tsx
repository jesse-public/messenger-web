import React, { FC, Reducer, useReducer } from "react";
import Main from "./Main";
import { DispatchContext, StateContext } from "../contexts";
import { AppAction, rootReducer } from "../data/reducers";
import { AppState, initialState } from "../data/state";

const App: FC = () => {
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(rootReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Main />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
