import React, { FC, useCallback, useRef } from "react";
import { usePublicUserCodeThrows, useQrCodeDataUrlThrows } from "../hooks";

interface ShareableUserInformationProps {
  readonly connectionUrl: string;
}

const ShareableUserInformation: FC<ShareableUserInformationProps> = ({ connectionUrl }) => {
  const publicUserCode = usePublicUserCodeThrows(connectionUrl);
  const publicUserQrCodeDataUrl = useQrCodeDataUrlThrows(connectionUrl);

  const publicUserCodeInputRef = useRef<HTMLInputElement>(null);

  const copyCodeToClipBoard = useCallback(() => {
    publicUserCodeInputRef.current?.select();
    document.execCommand("copy");
  }, []);

  return (
    <>
      <div>QR</div>
      <img src={publicUserQrCodeDataUrl} />
      <div>Code</div>
      <input contentEditable={false} readOnly={true} ref={publicUserCodeInputRef} type="text" value={publicUserCode} />
      <button onClick={copyCodeToClipBoard}>📋 Copy</button>
    </>
  );
};

export default ShareableUserInformation;
