import { FC, useCallback, useContext, useState } from "react";
import { DispatchContext } from "../contexts";
import { createConversation } from "../data/actions";
import JoinConversationForm from "./JoinConversationForm";
import ShareableUserInformation from "./ShareableUserInformation";

enum FormType {
  JoinConversation = "JoinConversation",
  StartNewConversation = "StartNewConversation",
}

const PageStartConversation: FC = () => {
  const [activeForm, setActiveForm] = useState<FormType | null>(null);
  const dispatch = useContext(DispatchContext);
  const connectionUrl = "randomConnectionUrl";

  const hideForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  const showJoinForm = useCallback(() => {
    setActiveForm(FormType.JoinConversation);
  }, []);

  const showStartNewForm = useCallback(() => {
    setActiveForm(FormType.StartNewConversation);
  }, []);

  const startConversation = useCallback(() => {
    dispatch(createConversation(connectionUrl));
  }, [connectionUrl, dispatch]);

  switch (activeForm) {
    case FormType.JoinConversation:
      return (
        <>
          <div>
            <button onClick={hideForm}>⬅️ Back</button>
          </div>
          <JoinConversationForm />
        </>
      );
    case FormType.StartNewConversation:
      return (
        <>
          <div>
            <button onClick={hideForm}>⬅️ Back</button>
            <button onClick={startConversation}>✅ Start conversation</button>
          </div>
          <ShareableUserInformation connectionUrl={connectionUrl} />
        </>
      );
    default:
      return (
        <>
          <button onClick={showJoinForm}>💬 Join Conversation</button>
          <button onClick={showStartNewForm}>🆕 Start New Conversation</button>
        </>
      );
  }
};

export default PageStartConversation;
