import React, { FC, useCallback, useContext, useState } from "react";
import { DispatchContext } from "../contexts";
import { joinConversation } from "../data/actions";
import { useJoinableConversationFromCode } from "../hooks";

const JoinConversationForm: FC = () => {
  const [code, setCode] = useState("");
  const conversation = useJoinableConversationFromCode(code);
  const isJoinConversationDisabled = conversation === null;

  const updateCode = useCallback(({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(target.value);
  }, []);

  const dispatch = useContext(DispatchContext);
  const joinConversationUsingCode = useCallback(() => {
    if (conversation === null) {
      throw new Error("No JoinableConversation found in code");
    }

    dispatch(joinConversation(conversation.connectionUrl, conversation.recipient));
  }, [conversation, dispatch]);

  return (
    <>
      <textarea
        autoFocus={true}
        cols={100}
        onChange={updateCode}
        placeholder="🔢 Enter the code of the conversation that you would like to join."
        rows={12}
        style={{ resize: "none" }}
        value={code}
      />
      <button disabled={isJoinConversationDisabled} onClick={joinConversationUsingCode}>
        ✅ Join
      </button>
    </>
  );
};

export default JoinConversationForm;
