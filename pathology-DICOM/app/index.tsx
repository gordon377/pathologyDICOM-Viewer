import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

// Add this to declare 'iframe' as a valid JSX element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
    }
  }
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'web' ? (
        <iframe
          src="http://localhost:3000" // Local Host Placeholder for Web
          style={{ flex: 1, width: '100%', height: '100%', border: 'none' }}
          title="Web Content"
        />
      ) : (
        <WebView
          source={{ uri: 'http://[Your IPv4 Address Here]:3000' }} // Use your local network IP here or appropriate URL 
          style={{ flex: 1 }}
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});