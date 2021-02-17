import qrcode from "qrcode-generator";
import { useMemo } from "react";
import { usePublicUserCodeThrows } from "./usePublicUserCodeThrows";

type UseQrCodeDataUrlThrows = (connectionUrl: string) => string;
export const useQrCodeDataUrlThrows: UseQrCodeDataUrlThrows = (connectionUrl) => {
  const publicUserCode = usePublicUserCodeThrows(connectionUrl);

  return useMemo(() => {
    const qr = qrcode(40, "L");

    qr.addData(publicUserCode);
    qr.make();

    return qr.createDataURL();
  }, [publicUserCode]);
};
