import { NativeModules } from 'react-native';

type StripeSdkType = {
  getDeviceName(): Promise<string>;
  test(): Promise<string>;
};

const { StripeSdk } = NativeModules;

export default StripeSdk as StripeSdkType;
