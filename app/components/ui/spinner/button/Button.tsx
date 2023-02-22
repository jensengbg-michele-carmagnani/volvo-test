import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  hover?: string;
  rounded?: boolean;
  onClick?: () => void;
  key?: string;
}

const Button: React.FC<Props> = ({
  style,
  key,
  children,
  onClick,
  disabled,
  type = 'button',
}) => {
  return (
    <button
      key={key}
      disabled={disabled}
      style={style}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={` disabled:opacity-80 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
