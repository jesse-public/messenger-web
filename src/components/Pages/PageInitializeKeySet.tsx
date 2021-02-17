import React, { FC } from "react";
import { useInitializeKeySetEffect } from "../../hooks";
import Timer from "../Timer";

const PageInitializeKeySet: FC = () => {
  useInitializeKeySetEffect();

  return <Timer text="🔑 Generating cryptographic keys..." />;
};

export default PageInitializeKeySet;
