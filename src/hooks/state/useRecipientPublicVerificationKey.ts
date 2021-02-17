import { useRecipient } from "./useRecipient";

type UseRecipientPublicVerificationKey = () => JsonWebKey | null;
export const useRecipientPublicVerificationKey: UseRecipientPublicVerificationKey = () => {
  const recipient = useRecipient();

  return recipient?.publicVerificationKey ?? null;
};
