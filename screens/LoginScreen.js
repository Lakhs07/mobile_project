// VisteonApp/src/screens/LoginScreen.js
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';
import { COLORS } from '../constants/colors';
import theme from '../constants/theme';

// Optional: If you have a background image, place it in assets and uncomment
// const loginBgImage = require('../../assets/login-background.png');

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Username and Password are required.');
      return;
    }
    // Mock login logic
    console.log('Username:', username, 'Password:', password);
    // Navigate to the main app (BottomTabNavigator which defaults to HomeScreen)
    navigation.replace('MainApp');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      {/* Replace with ImageBackground if you have an image */}
      <View style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Visteon</Text>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome.....</Text>
          
          <StyledInput
            placeholder="User Name"
            value={username}
            onChangeText={setUsername}
            iconName="person-outline"
          />
          <StyledInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            iconName="lock-closed-outline"
          />
          <StyledButton title="Log in" onPress={handleLogin} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrayBackground, // Fallback background
    fontFamily: theme.fonts.dmMedium
  },
  backgroundImage: { // This View will act as the top part with the "Visteon" logo
    height: height * 0.45, // Adjust height as per your design
    backgroundColor: COLORS.primaryDarkBlue, // Placeholder for actual image
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    // If Visteon is an image logo, use <Image> here
    // For text logo as in image:
    paddingTop: 60, // Adjust as needed for status bar
  },
  logoText: {
    fontSize: 48,
    fontFamily: theme.fonts.dmMedium,
    color: COLORS.white,
    textAlign: 'center',
    // Add any specific styling for "Visteon" text if it's not an image
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end', // Pushes formContainer to the bottom half
  },
  formContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 40,
    minHeight: height * 0.55, // Ensure it takes up at least the bottom half
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: theme.fonts.dmMedium,
    color: COLORS.primaryOrange,
    marginBottom: 30,
    textAlign: 'left',
  },
});

export default LoginScreen;
