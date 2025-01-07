import { createContext, useState, useEffect, useContext } from "react";
import api from "@/lib/api";
import { RegisterFormValues } from "@/pages/register-page";
import { LoginFormValues as LoginCredentials } from "@/pages/login-page";
import { ACCESS_TOKEN_STORAGE_KEY } from "@/constants/auth.constant";

interface LoggedInUser {
  id: string;
  email: string;
  imageUrl?: string;
}

interface AuthContextType {
  loggedInUser: LoggedInUser | null | undefined;
  login: (user: LoginCredentials) => Promise<void>;
  register: (user: RegisterCredentials) => Promise<void>;
  logout: () => void;
}

type RegisterCredentials = Omit<RegisterFormValues, "confirmPassword">;

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedInUser, setLoggedInUser] = useState<
    LoggedInUser | null | undefined
  >(undefined);
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    // more logic
    return storedToken;
  });

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
      fetchUser();
    } else {
      setLoggedInUser(null);
    }
  }, [accessToken]);

  async function fetchUser() {
    try {
      const response = await api.get("/auth/loggedInUser");
      setLoggedInUser(response.data.loggedInUser);
    } catch (error: any) {
      if (error.response?.status === 401) {
        console.error("Invalid token, logging out");
        logout();
      } else if (error.response?.status === 404) {
        console.error("User not found, logging out");
        logout();
      } else {
        console.error("Error fetching user data:", error);
      }
    }
  }

  function logout() {
    setAccessToken(null);
    setLoggedInUser(null);
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  }

  async function login(cred: LoginCredentials) {
    try {
      const response = await api.post("/auth/login", cred);
      setAccessToken(response.data.token);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  async function register(cred: RegisterCredentials) {
    try {
      await api.post("/auth/register", cred);
    } catch (error) {
      console.error("Error registering:", error);
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ loggedInUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
}
