// import './App.css';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './components/Auth/AuthContext';
// import { AuthInfo } from './components/Auth/AuthInfo';
// import { AuthContext } from './components/Auth/AuthContext';
// import { Generator } from './components/Generator/Generator';
// import { KeepValue } from './components/KeepValue/KeepValue';
// import { ProductForm } from './components/RegistrationForm/ProductForm';
// import { RegistrationFormRefs } from './components/RegistrationForm/RegistrationFormRefs';
// import { RegistrationFormRHF } from './components/RegistrationForm/RegistrationFormRHF';
// import { RegistrationFormState } from './components/RegistrationForm/RegistrationFormState';
import { useState } from 'react';
import { router } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {/* <Generator /> */}
      {/* <RegistrationFormState /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <KeepValue /> */}
      {/* <RegistrationFormRHF /> */}
      {/* <ProductForm /> */}
      <QueryClientProvider client={queryClient}>
        <AuthProvider value={{ isLoggedIn, setIsLoggedIn }}>
          <RouterProvider router={router} />
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>

      {/* <AuthInfo /> */}
    </>
  );
}

export default App;
