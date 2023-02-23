import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  hover?: string;
  rounded?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  style,
  children,
  onClick,
  disabled,
  type = 'button',
}) => {
  return (
    <button
      disabled={disabled}
      style={style}
      onClick={onClick}
      type={type}
      className={` disabled:opacity-80 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
