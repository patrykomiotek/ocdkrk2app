import React from 'react';

interface CustomButtonProps {
  label?: string;
  bgColor?: string;
  color?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<CustomButtonProps> = ({
  label,
  bgColor = 'alizarin',
  color = 'clouds',
  children,
}) => {
  return (
    <button style={{ backgroundColor: bgColor, color }}>
      {label || children}
    </button>
  );
};

// export default Button;
