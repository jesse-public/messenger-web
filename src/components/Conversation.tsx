import React, { FC } from "react";
import EncryptedMessageComposer from "./EncryptedMessageComposer";
import MessageComposer from "./MessageComposer";
import MessageList from "./MessageList";

const Conversation: FC = () => (
  <div>
    <EncryptedMessageComposer />
    <MessageList />
    <MessageComposer />
  </div>
);

export default Conversation;
