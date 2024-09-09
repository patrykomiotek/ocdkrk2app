// export const Text = ({ children }: { children: string }) => {

type Props = {
  children: string;
};

// #1
// export const Text = (props: Props) => {
//   return <p>{props.children}</p>;
// };

// #2
export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};

// #3
// export const Text = ({ children }: { children: string }) => {
//   return <p>{children}</p>;
// };
