import {
  type ComponentProps,
  useId,
  forwardRef,
  ComponentPropsWithRef,
} from 'react';

// type Props = {
//   label: string;
// } & ComponentProps<'input'>;

interface Props extends ComponentPropsWithRef<'input'> {
  label: string;
}

// HTMLInputElement

export const Input = forwardRef(
  ({ label, ...rest }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const id = useId();
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} id={id} {...rest} />
      </div>
    );
  }
);
Input.displayName = 'forwardRef(Input)';

// export const Input = ({ label, ...rest }: Props) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{label}</label>
//       <input id={id} {...rest} />
//     </div>
//   );
// };

// type Props = {
//   label: string;
//   type: 'email' | 'password' | 'text';
//   onChange: ChangeEventHandler<HTMLInputElement>;
//   value?: string;
// };

// export const Input = ({
//   label,
//   type,
//   value,
//   onChange,
// }: Props) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{label}</label>
//       <input
//         id={id}
//         type={type}
//         value={value}
//         onChange={onChange}
//         required
//       />
//     </div>
//   );
// };
