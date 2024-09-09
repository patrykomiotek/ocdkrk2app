import { MouseEventHandler } from 'react';

type ColorKey =
  | 'turquoise'
  | 'emerald'
  | 'peterRiver'
  | 'amethyst'
  | 'wetAsphalt'
  | 'greenSea'
  | 'nephritis'
  | 'belizeHole'
  | 'wisteria'
  | 'midnightBlue'
  | 'sunFlower'
  | 'carrot'
  | 'alizarin'
  | 'clouds'
  | 'concrete'
  | 'orange'
  | 'pumpkin'
  | 'pomegranate'
  | 'silver'
  | 'asbestos';

const colors: Record<ColorKey, string> = {
  // sfsdfsdfs: '#ffffff',
  turquoise: '#1abc9c',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  amethyst: '#9b59b6',
  wetAsphalt: '#34495e',
  greenSea: '#16a085',
  nephritis: '#27ae60',
  belizeHole: '#2980b9',
  wisteria: '#8e44ad',
  midnightBlue: '#2c3e50',
  sunFlower: '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  silver: '#bdc3c7',
  asbestos: '#7f8c8d',
};

interface FancyButtonProps {
  children: React.ReactNode;
  bgColor?: ColorKey;
  color?: ColorKey;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  bgColor = 'turquoise',
  color = 'clouds',
  onClick,
}: FancyButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: colors[bgColor],
    color: colors[color],
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

type ButtonProps = typeof Button;
type ButtonPropsReturnType = ReturnType<typeof Button>;
type ButtonPropsParameters = Parameters<typeof Button>[0];

// const myButton: ButtonPropsParameters = {
//   bgColor,
//   children
// }
