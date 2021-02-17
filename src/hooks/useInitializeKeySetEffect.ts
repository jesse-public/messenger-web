import { useContext, useEffect } from "react";
import { DispatchContext } from "../contexts";
import { generateKeySet } from "../cryptography";
import { setKeySet } from "../data/actions";

type UseInitializeKeySetEffect = () => void;
export const useInitializeKeySetEffect: UseInitializeKeySetEffect = () => {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      const keySet = await generateKeySet();

      dispatch(setKeySet(keySet));
    })();
  }, [dispatch]);
};
