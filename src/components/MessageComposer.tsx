import React, { FC, useCallback, useState } from "react";
import { useRecipient, useSendMessageCallback } from "../hooks";

const MessageComposer: FC = () => {
  const [messageText, setMessageText] = useState("");
  const recipient = useRecipient();
  const isSendDisabled = recipient == null || messageText.length === 0;

  const updateMessageText = useCallback(({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(target.value);
  }, []);

  const sendMessage = useSendMessageCallback();

  const sendMessageText = useCallback(async () => {
    await sendMessage(messageText);
    setMessageText("");
  }, [sendMessage, messageText]);

  return (
    <div>
      <textarea
        autoFocus={true}
        onChange={updateMessageText}
        placeholder="🔐 Type a message to send."
        rows={6}
        style={{ boxSizing: "border-box", resize: "none", width: "100%" }}
        value={messageText}
      />
      <button disabled={isSendDisabled} onClick={sendMessageText}>
        ✉️ Send
      </button>
    </div>
  );
};

export default MessageComposer;
