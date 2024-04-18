import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('./../../../assets/images/login.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: Colors.white, textAlign: 'center' }}>
          Let's Find
          <Text style={{ fontWeight: 'bold' }} > professional cleaning and repair
          </Text> services
        </Text>
        <Text style={{ fontSize: 15, color: Colors.white, textAlign: 'center', marginTop: 20 }}>Best App to find services near you which deliver you a professional services</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ textAlign: 'center', fontSize: 17, color: Colors.primary }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.black,
    borderRadius: 15,
  },
  subContainer: {
    width: '105%',
    backgroundColor: Colors.primary,
    height: '50%',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    position: 'relative',
  },
  button: {
    padding: 15,
    backgroundColor: Colors.white,
    borderRadius: 99,
    marginTop: 40
  }

})