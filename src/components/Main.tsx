import { FC } from "react";
import PageConfirmAlias from "./Pages/PageConfirmAlias";
import PageInitializeKeySet from "./Pages/PageInitializeKeySet";
import PageStartConversation from "./Pages/PageStartConversation";
import { useConversation, useIsAliasConfirmed, useIsKeySetInitialized } from "../hooks";
import Conversation from "./Conversation";

const Main: FC = () => {
  const { connectionUrl } = useConversation();
  const isAliasConfirmed = useIsAliasConfirmed();
  const isKeySetInitialized = useIsKeySetInitialized();

  if (!isKeySetInitialized) {
    return <PageInitializeKeySet />;
  }

  if (!isAliasConfirmed) {
    return <PageConfirmAlias />;
  }

  if (connectionUrl == null) {
    return <PageStartConversation />;
  }

  return <Conversation />;
};

export default Main;
