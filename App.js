import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
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
