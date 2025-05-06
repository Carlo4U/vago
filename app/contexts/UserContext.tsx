import React, { createContext, useState, useContext } from 'react';

type UserContextType = {
  profileImage: string | null;
  setProfileImage: (image: string | null) => void;
  username: string;
  setUsername: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [username, setUsername] = useState('user-registered');
  const [email, setEmail] = useState('user@example.com');

  return (
    <UserContext.Provider value={{ 
      profileImage, 
      setProfileImage,
      username,
      setUsername,
      email,
      setEmail
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};