import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '../../ui';
import { RegistrationDto, registrationSchema } from './types-schema';

// type RegistrationData = {
//   email: string;
//   password: string;
//   language: string;
//   confirmPassword: string;
// };

export const RegistrationFormRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationDto>({
    resolver: zodResolver(registrationSchema),
  });
  const languageFieldRef = useRef<HTMLInputElement>(null);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  // const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  //   // console.log({ email, password, language });
  //   console.log({
  //     email: emailFieldRef.current?.value,
  //     password: passwordFieldRef.current?.value,
  //     language: languageFieldRef.current?.value,
  //   });
  // };

  const handleRegistrationFormSubmit: SubmitHandler<RegistrationDto> = (
    data
  ) => {
    console.log(data);
  };

  const handleLanguageChange = (_event) => {
    const value = languageFieldRef.current?.value || '';
    if (languageFieldRef.current) {
      if (value.toLocaleLowerCase() === 'php') {
        languageFieldRef.current.style.border = '#f00 1px solid';
      } else {
        languageFieldRef.current.style.border = '';
      }
    }
  };

  return (
    <div>
      <h2>User Information</h2>
      <form onSubmit={handleSubmit(handleRegistrationFormSubmit)}>
        <Input
          {...register('email')}
          label="Email"
          type="email"
          defaultValue="alamakota@wp.pl"
        />
        {errors.email && <p className="text-red">{errors.email.message}</p>}

        <Input {...register('password')} label="Password" type="password" />
        {errors.password && (
          <p className="text-red">{errors.password.message}</p>
        )}
        <Input
          {...register('confirmPassword')}
          label="Confirm password"
          type="password"
        />
        {errors.confirmPassword && (
          <p className="text-red">{errors.confirmPassword.message}</p>
        )}
        <Input
          {...register('language')}
          label="Favorite Programming Language"
          type="text"
          onChange={handleLanguageChange}
        />
        {errors.language && (
          <p className="text-red">{errors.language.message}</p>
        )}

        {/* <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="language">Favorite Programming Language:</label>
          <input
            id="language"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div> */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
