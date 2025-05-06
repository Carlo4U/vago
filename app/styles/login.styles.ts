import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../../src/utils/fonts';
import { colors } from '../../src/utils/colors';
import { Ionicons } from '@expo/vector-icons'
const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
        position: 'relative',
    },
    backButtonWrapper: {
        height: 38,
        width: 38,
        backgroundColor: colors.avocado,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    textcontainer: {
        marginBottom: 30,
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: fonts.Bold,
        fontWeight: 'bold',
        lineHeight: 40,
    },
    loginnow: {
        marginBottom: 30,
    },
    subheadingText: {
        fontSize: 16,
        fontWeight: 'light',
        textAlign: 'center',
        color: '#000',
        fontFamily: fonts.Regular,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.Secondary,
        borderRadius: 32,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginBottom: 15,
        height: 50,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
        fontWeight: 'light',
    },
    forgotPasswordText: {
        textAlign: 'center',
        color: colors.primary,
        fontFamily: fonts.SemiBold,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 20,
    },
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 32,
        marginBottom: 25,
    },
    loginText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
    },
    continueText: {
        textAlign: 'center',
        marginBottom: 15,
        fontFamily: fonts.Regular,
        fontWeight: 'light',
        color: colors.primary,
    },
    loginnButtonWrapper: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        gap: 10,
        marginBottom: 20,
    },
    googleImage: {
        height: 40,
        width: 40,
    },
    googleText: {
       fontSize: 18,
       fontFamily: fonts.SemiBold,
       fontWeight: 'bold',
    },
    accountText: {
        color: colors.primary,
        fontFamily: fonts.Regular,
        fontWeight: 'light',
        fontSize: 15,
    },
    footerTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 20,
        gap: 5,
    },
    signupText: {
        color: colors.primary,
        fontFamily: fonts.Bold,
        fontWeight: 'bold',
        fontSize: 15,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.Secondary,
        marginTop: 20,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        overflow: 'hidden', // This ensures the animation stays within the container
        position: 'relative', // Add position relative for proper child positioning
    },
    authButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%', // Ensure full height
        borderRadius: 0, // Remove individual border radius
        position: 'relative', // Ensure proper positioning
        zIndex: 1, // Ensure text is above background
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        fontWeight: 'bold',
    },
    signupButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        fontWeight: 'bold',
    },
});
