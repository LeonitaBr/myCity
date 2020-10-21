import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, NativeModules } from 'react-native';
import AppNavigator from "./src/navigators/AppNavigator";
import { setNavigator } from './src/navigators/navigationsRef';
import { tryLogin } from './src/store/auth/authAction'
import { useDispatch } from 'react-redux';

const App = () => {
  
  useEffect(() => {
    if (Platform.OS === 'android') {
      NativeModules.SplashScreenModule.hide();
    }
    dispatch(tryLogin())
  }, [dispatch])
  const dispatch = useDispatch();

  
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator ref={navigator => setNavigator(navigator)} />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }

});

export default App;
