import { useContext, useCallback } from "react";
import { DispatchContext } from "../contexts";
import { signThenEncrypt } from "../cryptography";
import { sendMessage } from "../data/actions";
import { useRecipientPublicEncryptionKey, useKeySetThrows } from "./state";

type UseSendMessageCallback = () => (messageText: string) => Promise<void>;
export const useSendMessageCallback: UseSendMessageCallback = () => {
  const publicEncryptionKey = useRecipientPublicEncryptionKey();
  const { privateSigningKey } = useKeySetThrows();
  const dispatch = useContext(DispatchContext);

  return useCallback(
    async (messageText) => {
      if (publicEncryptionKey == null) {
        return;
      }

      // https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Signing_messages
      const encrypted = await signThenEncrypt(messageText, publicEncryptionKey, privateSigningKey);

      dispatch(sendMessage(messageText));
      dispatch(sendMessage(encrypted));
    },
    [dispatch, privateSigningKey, publicEncryptionKey]
  );
};
