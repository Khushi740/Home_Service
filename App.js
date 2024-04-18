import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import TabNavigation from './App/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const tokenCache = {

  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  return (
    <View style={styles.container}>
    <ClerkProvider  tokenCache={tokenCache}
     publishableKey='pk_test_YWR2YW5jZWQtbGl6YXJkLTE2LmNsZXJrLmFjY291bnRzLmRldiQ'>
          <StatusBar style="auto" />
      <SignedIn>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
       </SignedIn>
      <SignedOut>
        <Login />
       </SignedOut> 
    </ClerkProvider>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop:10,
  },
});
