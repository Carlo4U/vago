import { StyleSheet, Text, TextInput, TouchableOpacity, View, LayoutAnimation, Platform, UIManager } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../../styles/login.styles'
import { colors } from '../../../src/utils/colors'
import { Image } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useRoute } from '@react-navigation/native'
import { useState, useEffect } from 'react';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const signup = () => {

    const navigation = useNavigation();
    const [secureEntry, setSecureEntery] = React.useState(true);
    const [activeTab, setActiveTab] = useState('signup');

    useEffect(() => {
      // Set initial tab to signup since we're on signup screen
      setActiveTab('signup');
    }, []);

    const handleLogin = () => {
      // Configure animation before state change
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setActiveTab('login');
      router.push("/screens/auth/login");
    };
    
    const handleSignup = () => {
      // Configure animation before state change
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setActiveTab('signup');
      router.push("/screens/auth/signup");
    };

  return (
    <View style={styles.container}>
      
      <View style={styles.textcontainer}>
        <Text style={styles.headingText}>Let’s get</Text>
        <Text style={styles.headingText}>started</Text>
      </View>
      <View style={styles.loginnow}>
        <Text style={styles.subheadingText}>Sign up to your account</Text>
      </View>




      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={"person-outline"} size={24} color={colors.Secondary}/>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your username"
            placeholderTextColor={colors.Secondary}
            keyboardType='default'
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"mail-open-outline"} size={24} color={colors.Secondary}/>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={colors.Secondary}
            keyboardType='email-address'
          />
        </View>


        <View style={styles.inputContainer}>
          <Ionicons name={"lock-closed-outline"} size={24} color={colors.Secondary}/>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={colors.Secondary}
            secureTextEntry={secureEntry}
          />
          <TouchableOpacity
            onPress={()=> {
              setSecureEntery((prev) => !prev);
            }}
          >
            <Ionicons name={"eye-outline"} size={20} color={colors.Secondary}/>
          </TouchableOpacity>
        </View>



        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>


        <View style={styles.footerTextContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity>
          <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.authButtonWrapper,
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
            styles.authButtonWrapper,
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
  )
}

export default signup

