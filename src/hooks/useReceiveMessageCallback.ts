import { useCallback, useContext } from "react";
import { DispatchContext } from "../contexts";
import { decryptThenVerify } from "../cryptography";
import { receiveMessage } from "../data/actions";
import { useRecipientPublicVerificationKey, useKeySetThrows } from "./state";

type UseReceiveMessageCallback = () => (cipherText: string) => Promise<void>;
export const useReceiveMessageCallback: UseReceiveMessageCallback = () => {
  const publicVerificationKey = useRecipientPublicVerificationKey();
  const { privateDecryptionKey } = useKeySetThrows();
  const dispatch = useContext(DispatchContext);

  return useCallback(
    async (cipherText) => {
      if (publicVerificationKey == null) {
        return;
      }

      const message = await decryptThenVerify(cipherText, publicVerificationKey, privateDecryptionKey);

      dispatch(receiveMessage(cipherText));
      dispatch(receiveMessage(message));
    },
    [dispatch, privateDecryptionKey, publicVerificationKey]
  );
};
