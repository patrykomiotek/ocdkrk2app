import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from 'react';

type ContextData = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
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

export const AuthProvider = AuthContext.Provider;
