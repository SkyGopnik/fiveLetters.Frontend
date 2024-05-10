import bridge from "@vkontakte/vk-bridge";

import {
  BRIDGE_STORAGE_GET_METHOD,
  BRIDGE_STORAGE_SET_METHOD
} from "./constants";

export class StorageUtil {

  public static async set(key: string, value: string) {
    const bridgeMethodSupported = bridge.isEmbedded();

    if (bridgeMethodSupported) {
      await bridge.send(BRIDGE_STORAGE_SET_METHOD, {
        key,
        value
      });

      return;
    }

    localStorage.setItem(key, value);
  }

  public static async get(key: string): Promise<string> {
    const bridgeMethodSupported = bridge.isEmbedded();

    if (bridgeMethodSupported) {
      const data = await bridge.send(BRIDGE_STORAGE_GET_METHOD, {
        keys: [key]
      });

      return data.keys[0].value;
    }

    return localStorage.getItem(key) ?? "";
  }

}
