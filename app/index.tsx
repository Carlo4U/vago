import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/splash.styles'; 
import { colors } from '../src/utils/colors'; 
import { fonts } from '../src/utils/fonts'; 
import { login } from './login';

export default function Index() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('login');

  const handleLogin = () => {
    setActiveTab('login');
    router.push("login" as any);
  };

  const handleSignup = () => {
    setActiveTab('signup');
    router.push("signup" as any);
  };

  return (
    <View style={styles.container}>

      <View style={styles.background} />


      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/splash/logo1.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>


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

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome{'\n'}Home!</Text>
        <Text style={styles.subtitleText}>Click the button below to start your{'\n'}Smart Home</Text>
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: activeTab === 'login' ? colors.primary : 'transparent' },
          ]} 
          onPress={handleLogin}
        >
          <Text style={[
            styles.loginButtonText, 
            { color: activeTab === 'login' ? colors.white : colors.primary }
          ]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.loginButtonWrapper, 
            { backgroundColor: activeTab === 'signup' ? colors.primary : 'transparent' }
          ]} 
          onPress={handleSignup}
        >
          <Text style={[
            styles.signupButtonText,
            { color: activeTab === 'signup' ? colors.white : colors.primary }
          ]}>
            Sign-Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

