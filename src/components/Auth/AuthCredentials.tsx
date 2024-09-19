// import { useContext } from 'react';
// import { AuthContext } from './AuthContext';
import { Button } from '@ui';
import { useAuthContext } from './AuthContext';

export const AuthCredentials = () => {
  // const context = useContext(AuthContext);
  const context = useAuthContext();

  const handleToggle = () => {
    // TODO: refactor
    context.toggle();
  };

  return (
    <div>
      <p className="dark:text-gray-300">Is user logged? {context.isLoggedIn ? 'YES' : 'NO'}</p>
      <Button onClick={handleToggle}>Toggle</Button>
    </div>
  );
};
