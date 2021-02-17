import React, { ChangeEvent, FC, useCallback, useContext, useState } from "react";
import { DispatchContext } from "../../contexts";
import { setAlias } from "../../data/actions";
import { useCurrentUser } from "../../hooks";

const defaultAlias = "Anonymous";

const PageConfirmAlias: FC = () => {
  const { alias } = useCurrentUser();
  const [aliasText, setAliasText] = useState(alias ?? defaultAlias);
  const isConfirmDisabled = aliasText.length < 1;

  const dispatch = useContext(DispatchContext);
  const updateAliasText = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setAliasText(evt.target.value);
  }, []);

  const confirmAlias = useCallback(() => {
    if (aliasText.length < 1) {
      return;
    }

    dispatch(setAlias(aliasText));
  }, [aliasText, dispatch]);

  return (
    <>
      <div>
        <strong>Choose an alias</strong>
      </div>
      <input autoFocus={true} onChange={updateAliasText} size={30} type="text" value={aliasText} />
      <button disabled={isConfirmDisabled} onClick={confirmAlias}>
        ✅ Confirm
      </button>
    </>
  );
};

export default PageConfirmAlias;
