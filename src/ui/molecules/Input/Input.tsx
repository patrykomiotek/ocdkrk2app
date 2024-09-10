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
  (
    { label, className, ...rest }: Props,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId();
    return (
      <div className="mt-4">
        <label
          htmlFor={id}
          className="mb-2 block text-lg font-semibold text-gray-900"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={`block w-full appearance-none rounded-lg border border-gray-200 bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-lg text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ${className}`}
          {...rest}
        />
      </div>
    );
  },
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
