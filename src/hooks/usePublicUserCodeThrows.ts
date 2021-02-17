import { useCurrentUser } from "./state";
import { JoinableConversation } from "./typeguards/isJoinableConversation";

type UsePublicUserCodeThrows = (connectionUrl: string) => string;
export const usePublicUserCodeThrows: UsePublicUserCodeThrows = (connectionUrl) => {
  const { alias, keySet } = useCurrentUser();

  if (keySet == null || alias == null) {
    throw new Error("keySet and alias are required to generate user code");
  }

  const joinableConversation: JoinableConversation = {
    connectionUrl,
    recipient: {
      alias,
      publicEncryptionKey: keySet.publicEncryptionKey,
      publicVerificationKey: keySet.publicVerificationKey,
    },
  };

  return btoa(JSON.stringify(joinableConversation));
};
