import { useState } from 'react';
import type { Meta } from '@storybook/react';

import { AuthCredentials } from './AuthCredentials';
import { AuthProvider } from './AuthContext';

const meta = {
  title: 'Components/Auth/AuthCredentials',
  component: AuthCredentials,
  // parameters: {
  //   layout: 'centered',
  // },
} satisfies Meta<typeof AuthCredentials>;

export default meta;

// export const _AuthCredentials: Story = {};
export const AuthCredentialsWithContext = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider value={{ isLoggedIn, setIsLoggedIn }}>
      <AuthCredentials />
    </AuthProvider>
  );
};

export const AuthCredentialsWithoutContext = () => <AuthCredentials />;
