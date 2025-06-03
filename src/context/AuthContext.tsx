import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define user type
interface User {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
}

// Define context type
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Mock user data for demo purposes (in a real app, this would come from Firebase)
const mockUser: User = {
  id: '123456',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  photoURL: 'https://i.pravatar.cc/150?img=68',
};

// Auth provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock login function
  const login = async (email: string, password: string): Promise<void> => {
    // This would be a Firebase auth call in a real application
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setCurrentUser(mockUser);
        setLoading(false);
        resolve();
      }, 1000);
    });
  };

  // Mock signup function
  const signup = async (name: string, email: string, password: string): Promise<void> => {
    // This would be a Firebase auth call in a real application
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { ...mockUser, name, email };
        setCurrentUser(newUser);
        setLoading(false);
        resolve();
      }, 1000);
    });
  };

  // Mock logout function
  const logout = async (): Promise<void> => {
    // This would be a Firebase auth call in a real application
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setCurrentUser(null);
        setLoading(false);
        resolve();
      }, 500);
    });
  };

  // Check if user is logged in on initial load
  useEffect(() => {
    // This would check Firebase auth state in a real application
    const checkAuth = setTimeout(() => {
      // For demo, check if there's a stored session
      const savedUser = localStorage.getItem('wealthwave_user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(checkAuth);
  }, []);

  // Save user to localStorage when it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('wealthwave_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('wealthwave_user');
    }
  }, [currentUser]);

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};