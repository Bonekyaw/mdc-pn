import { MMKVLoader } from "react-native-mmkv-storage";

export const MMKV = new MMKVLoader().initialize();

export const SETTING = new MMKVLoader().withInstanceID("setting").initialize();
export const USER = new MMKVLoader().withInstanceID("user").initialize();

export const MMKVENC = new MMKVLoader().withEncryption().initialize();

export const MMKVENCSETTING = new MMKVLoader()
  .withEncryption()
  .withInstanceID("setting")
  .initialize();
