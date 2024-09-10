import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return <div>Is user logged? {context?.isLoggedIn ? 'YES' : 'NO'}</div>;
};
