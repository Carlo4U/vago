import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../styles/login.styles'
import { colors } from '../src/utils/colors'
import { Image } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useRoute } from '@react-navigation/native'
export const login = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntery] = React.useState(true);
    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleSignup = () => {
        router.push("signup" as any);
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={"arrow-back-outline"}
          size={20}
          color={colors.white}
        />
      </TouchableOpacity>
      <View style={styles.textcontainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>
      <View style={styles.loginnow}>
        <Text style={styles.subheadingText}>Login to your account</Text>
      </View>

      <View style={styles.formContainer}>
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
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.continueText}>or continue with</Text>

        <TouchableOpacity style={styles.loginnButtonWrapper}>
          <Image
            source={require('../assets/images/google-logo.png')}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <View style={styles.footerTextContainer}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default login

