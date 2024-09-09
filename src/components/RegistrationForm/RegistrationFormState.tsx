import { type FormEventHandler, useState } from 'react';
import { Input } from '../../ui';

export const RegistrationFormState = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ email, password, language });
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Favorite Programming Language"
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
