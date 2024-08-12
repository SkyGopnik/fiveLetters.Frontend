import bridge, { EAdsFormats } from "@vkontakte/vk-bridge";
import { useState } from "react";

export const useWordNotFoundModal = ({ onWatch }: {
  onWatch: (cb?: () => void) => void
}) => {
  const [
    isWordNotFoundModalOpened,
    setWordNotFoundModalOpened
  ] = useState(false);

  const handleWordNotFoundModalWatch = async () => {
    try {
      await bridge.send("VKWebAppShowNativeAds", {
        ad_format: EAdsFormats.REWARD
      });
    } catch (e) {
      console.error(e);
    }

    onWatch(() => setWordNotFoundModalOpened(false));
  };

  const handleWordNotFoundModalClose = () => setWordNotFoundModalOpened(false);

  return {
    isWordNotFoundModalOpened,
    setWordNotFoundModalOpened,
    handleWordNotFoundModalWatch,
    handleWordNotFoundModalClose
  };
};
