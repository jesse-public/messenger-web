import { useRecipient } from "./useRecipient";

type UseRecipientPublicEncryptionKey = () => JsonWebKey | null;
export const useRecipientPublicEncryptionKey: UseRecipientPublicEncryptionKey = () => {
  const recipient = useRecipient();

  return recipient?.publicEncryptionKey ?? null;
};
