// export const Text = ({ children }: { children: string }) => {
import { memo } from 'react';

type Props = {
  children: string;
};

// #1
// export const Text = (props: Props) => {
//   return <p>{props.children}</p>;
// };

// #2
export const Text = memo(({ children }: Props) => {
  return <p>{children}</p>;
});
Text.displayName = 'memo(Text)';

// #3
// export const Text = ({ children }: { children: string }) => {
//   return <p>{children}</p>;
// };
