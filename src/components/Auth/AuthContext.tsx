import { createContext, useContext, useState, type Dispatch, type SetStateAction } from 'react';

// type ContextData = {
//   isLoggedIn: boolean;
//   setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
// };
type ContextData = {
  isLoggedIn: boolean;
  toggle: () => void;
  logIn?: () => void;
  logOut?: () => void;
};

// export const AuthContext = createContext<ContextData | undefined>(undefined);
const AuthContext = createContext<ContextData | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error('Oh no! Component should be placed inside AuthProvider');
};

// export const AuthProvider = AuthContext.Provider;

// const [isLoggedIn, setIsLoggedIn] = useState(true);

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);
  const toggle = () => setIsLoggedIn((value) => !value);

  return { isLoggedIn, logIn, logOut, toggle };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, toggle } = useAuth();

  return <AuthContext.Provider value={{ isLoggedIn, toggle }}>{children}</AuthContext.Provider>;
};
