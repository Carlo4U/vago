import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/splash.styles'; 
import { colors } from '../src/utils/colors'; 
import { fonts } from '../src/utils/fonts'; 
import { login } from './login';

export default function Index() {
  const router = useRouter();

  const handleStart = () => {
    // Navigate to the home screen
    router.push("login" as any);
  };

  const handleSignup = () => {
    // Navigate to the home screen
    router.push("signup" as any);
  };

  return (
    <View style={styles.container}>
      {/* Background - Light gray background */}
      <View style={styles.background} />

      {/* Logo at the top */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/splash/logo1.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Characters */}
      <View style={styles.charactersContainer}>
        <Image
          source={require('../assets/splash/Casual_Boy_Celebrating.png')}
          style={[styles.characterImage, { marginRight: -40 }]}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/splash/Casual_Boy.png')}
          style={[styles.characterImage, { marginLeft: -40 }]}
          resizeMode="contain"
        />
      </View>

      {/* Welcome Text */}
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome{'\n'}Home!</Text>
        <Text style={styles.subtitleText}>Click the button below to start your{'\n'}Smart Home</Text>
      </View>

      {/* Start Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[
          styles.
          loginButtonWrapper,
          { backgroundColor: colors.primary },
        ]} onPress={handleStart}>

          <Text style={styles.loginButtonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
