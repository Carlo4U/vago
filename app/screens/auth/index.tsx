import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/splash.styles';
import { colors } from '../../../src/utils/colors';
import { fonts } from '../../../src/utils/fonts';
import { login } from './login';
import { signup } from './signup';
export default function Index() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('login');

  const handleLogin = () => {
    setActiveTab('login');
    // Fix the route path to match file structure
    router.push("/screens/auth/login");
  };

  const handleSignup = () => {
    setActiveTab('signup');
    // Fix the route path to match file structure
    router.push("/screens/auth/signup");
  };

  return (
    <View style={styles.container}>

      <View style={styles.background} />


      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/splash/logo1.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>


      <View style={styles.charactersContainer}>
        <Image
          source={require('../../assets/splash/Casual_Boy_Celebrating.png')}
          style={[styles.characterImage, { marginRight: -40 }]}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/splash/Casual_Boy.png')}
          style={[styles.characterImage, { marginLeft: -40 }]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome{'\n'}Home!</Text>
        <Text style={styles.subtitleText}>Click the button below to start your{'\n'}</Text>
        <text style={styles.subtitleText2}>Smart Home</text>
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

          ]}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}










