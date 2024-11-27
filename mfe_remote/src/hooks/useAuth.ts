import { useEffect, useState } from 'react';
import { User } from '../components/UserProfileCard';
import { loginService } from '../services/login';

// Remote App (Authentication Micro Frontend)
interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
}

const useAuth = (): AuthState => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      // Simulated login logic
      const data = loginService(email, password);
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  // Check existing token on hook initialization
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Validate token and fetch user
      // Simplified for demo
      setToken(storedToken);
    }
  }, []);

  return {
    user,
    login,
    logout,
    token,
  };
};

export default useAuth;
