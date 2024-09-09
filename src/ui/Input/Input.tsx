import { ChangeEventHandler, useId } from 'react';

type Props = {
  label: string;
  type: 'email' | 'password' | 'text';
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

export const Input = ({
  label,
  type,
  value,
  onChange,
}: Props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
