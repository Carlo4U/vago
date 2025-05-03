import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../styles/login.styles'
import { colors } from '../src/utils/colors'
import { Image } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useRoute } from '@react-navigation/native'


export const signup = () => {

    const navigation = useNavigation();
    const [secureEntry, setSecureEntery] = React.useState(true);
    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleLogin = () => {
        router.push("login" as any);
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

        <Text style={styles.continueText}>or continue with</Text>

        <TouchableOpacity style={styles.loginnButtonWrapper}>
          <Image
            source={require('../assets/images/google-logo.png')}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <View style={styles.footerTextContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default signup

