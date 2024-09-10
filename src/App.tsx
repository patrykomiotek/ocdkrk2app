// import './App.css';
import { AuthInfo } from './components/Auth/AuthInfo';
import { AuthContext } from './components/Auth/AuthContext';
import { Generator } from './components/Generator/Generator';
import { KeepValue } from './components/KeepValue/KeepValue';
import { ProductForm } from './components/RegistrationForm/ProductForm';
import { RegistrationFormRefs } from './components/RegistrationForm/RegistrationFormRefs';
import { RegistrationFormRHF } from './components/RegistrationForm/RegistrationFormRHF';
import { RegistrationFormState } from './components/RegistrationForm/RegistrationFormState';
import { useState } from 'react';

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
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <AuthInfo />
      </AuthContext.Provider>
    </>
  );
}

export default App;
