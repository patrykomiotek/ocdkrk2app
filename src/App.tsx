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
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@components/Theme/ThemeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <Generator /> */}
      {/* <RegistrationFormState /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <KeepValue /> */}
      {/* <RegistrationFormRHF /> */}
      {/* <ProductForm /> */}

      <HelmetProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <ThemeProvider>
                <RouterProvider router={router} />
              </ThemeProvider>
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </Provider>
      </HelmetProvider>
      {/* <AuthInfo /> */}
    </>
  );
}

export default App;
