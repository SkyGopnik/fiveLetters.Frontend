import { useEffect } from "react";

import { useFirstRender } from "./useFirstRender";

export const useUpdateEffect = (
  effect: () => void,
  deps: Array<unknown>
) => {
  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      return;
    }

    effect();
  }, deps);
};
