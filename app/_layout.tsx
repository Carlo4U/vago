import { Stack } from "expo-router";
import './globals.css';
import { UserProvider } from './contexts/UserContext';
import { useEffect } from "react";

export default function RootLayout() {
  // Use useEffect to ensure any side effects happen after render
  useEffect(() => {
    // Any initialization code can go here
  }, []);

  return (
    <UserProvider>
      <Stack 
        screenOptions={{ 
          headerShown: false 
        }} 
        initialRouteName="screens/auth/index"
      />
    </UserProvider>
  );
}

