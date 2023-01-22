import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 700);
  })

  return (
    <View style={{flex: 1, paddingTop: 50, backgroundColor: '#343540'}}>
      <WebView 
        source={{uri: 'https://chat.openai.com/chat/'}}
        style={{ flex: 1, width: '100%', marginBottom: 30, backgroundColor: '#343540'}}
        bounces={false}
      />

      <StatusBar hidden={true}/>
    </View>
  );
}
