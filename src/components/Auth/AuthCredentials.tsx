import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Button } from '../../ui';

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  const handleToggle = () => {
    // TODO: refactor
    context?.setIsLoggedIn(!context.isLoggedIn);
  };

  return (
    <div>
      <p>Is user logged? {context?.isLoggedIn ? 'YES' : 'NO'}</p>
      <Button onClick={handleToggle}>Toggle</Button>
    </div>
  );
};
