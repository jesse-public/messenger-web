import React, { FC, useCallback, useState } from "react";
import { useRecipient, useReceiveMessageCallback } from "../hooks";

const EncryptedMessageComposer: FC = () => {
  const [cipherText, setCipherText] = useState("");
  const recipient = useRecipient();
  const isSendDisabled = recipient == null || cipherText.length === 0;

  const updateCipherText = useCallback(({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCipherText(target.value);
  }, []);

  const receiveMessage = useReceiveMessageCallback();

  const receiveCipherText = useCallback(async () => {
    await receiveMessage(cipherText);
    setCipherText("");
  }, [cipherText, receiveMessage]);

  return (
    <div>
      <textarea
        onChange={updateCipherText}
        placeholder="🔓 Enter a message to decrypt."
        rows={6}
        style={{ boxSizing: "border-box", resize: "none", width: "100%" }}
        value={cipherText}
      />
      <button disabled={isSendDisabled} onClick={receiveCipherText}>
        🔓 Decrypt
      </button>
    </div>
  );
};

export default EncryptedMessageComposer;
