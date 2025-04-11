import { FC, useReducer } from "react";
import Main from "./Main";
import { DispatchContext, StateContext } from "../contexts";
import { rootReducer } from "../data/reducers";
import { initialState } from "../data/state";

const App: FC = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Main />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
