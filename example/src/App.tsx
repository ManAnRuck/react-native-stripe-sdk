import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StripeSdk from 'react-native-stripe-sdk';

export default function App() {
  const [deviceName, setDeviceName] = React.useState('');
  const [test, setTest] = React.useState('');

  React.useEffect(() => {
    StripeSdk.getDeviceName().then(setDeviceName);
    StripeSdk.test().then(setTest);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Device name: {deviceName}</Text>
      <Text>{test}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
