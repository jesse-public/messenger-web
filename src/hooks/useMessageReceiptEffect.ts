import { useEffect } from "react";
import { getConnection } from "../connection";
import { useReceiveMessageCallback } from "./useReceiveMessageCallback";

export const useMessageReceiptEffect = (connectionUrl: string): void => {
  const decryptAndReceiveMessage = useReceiveMessageCallback();
  const connection = getConnection({ connectionUrl });

  useEffect(() => {
    connection.listen(decryptAndReceiveMessage);

    return () => {
      connection.close();
    };
  }, [connection, decryptAndReceiveMessage]);
};
