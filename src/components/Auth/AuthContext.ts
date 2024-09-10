import { createContext, type Dispatch, type SetStateAction } from 'react';

type ContextData = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<ContextData | undefined>(undefined);
