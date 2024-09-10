import { createContext } from 'react';

type ContextData = {
  isLoggedIn: boolean;
};

export const AuthContext = createContext<ContextData | undefined>(undefined);
