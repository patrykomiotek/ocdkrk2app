import './App.css';
import { Generator } from './components/Generator/Generator';
import { KeepValue } from './components/KeepValue/KeepValue';
import { RegistrationFormRefs } from './components/RegistrationForm/RegistrationFormRefs';
import { RegistrationFormRHF } from './components/RegistrationForm/RegistrationFormRHF';
import { RegistrationFormState } from './components/RegistrationForm/RegistrationFormState';

function App() {
  return (
    <>
      {/* <Generator /> */}
      {/* <RegistrationFormState /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <KeepValue /> */}
      <RegistrationFormRHF />
    </>
  );
}

export default App;
