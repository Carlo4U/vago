import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../src/utils/fonts';
import { colors } from '../src/utils/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 70,

  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  logoImage: {
    width: 80,
    height: 40,
    marginVertical: 2,
  },
  charactersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height * 0.5, // Make container taller
    marginTop: 0,
  },
  characterImage: {
    height: 200,
    width: 200, // Make images bigger
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    fontFamily: fonts.Regular,
    marginBottom: 10,
    lineHeight: 38,
  },
  subtitleText: {
    fontSize: 15,
    color: '#333',
    paddingHorizontal: 20,
    fontFamily: fonts.Italic,
    marginTop: 5,
    lineHeight: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'primary',
    marginTop: 20,
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
