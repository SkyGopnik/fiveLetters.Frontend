import { useDebounce } from "@react-hooks-library/core";
import bridge, { EAdsFormats } from "@vkontakte/vk-bridge";
import { useState } from "react";

import { useUpdateEffect } from "hooks";

export const useNeedHelpModal = ({ activeWord, onWatch }: {
  activeWord: Array<string>,
  onWatch: (cb?: () => void) => void
}) => {
  const [isNeedHelpModalOpened, setNeedHelpModalOpened] = useState(false);

  const debouncedActiveWord = useDebounce(activeWord, 45000);

  const handleNeedHelpModalWatch = async () => {
    try {
      await bridge.send("VKWebAppShowNativeAds", {
        ad_format: EAdsFormats.REWARD
      });
    } catch (e) {
      console.error(e);
    }

    onWatch(() => setNeedHelpModalOpened(false));
  };

  const handleNeedHelpModalClose = () => setNeedHelpModalOpened(false);

  useUpdateEffect(() => {
    if (isNeedHelpModalOpened) {
      return;
    }

    setNeedHelpModalOpened(true);
  }, [debouncedActiveWord]);

  return {
    handleNeedHelpModalWatch,
    handleNeedHelpModalClose,
    isNeedHelpModalOpened
  };
};
