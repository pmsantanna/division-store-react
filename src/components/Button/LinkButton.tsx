import { Link, type LinkProps } from 'react-router-dom';
import './link-button.css';
import type React from 'react';

interface LinkButtonProps extends LinkProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const baseClasses = 'inline-block font-bold rounded-xs transition-colors';
const variants = {
  primary: 'btn-rito',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) => {
  return (
    <>
      <Link
        to={to}
        className={` ${baseClasses} ${variants[variant]} ${className}`.trim()}
        {...rest}
      >
        {children}
        <span className="btn-rito-glow"></span>
      </Link>
    </>
  );
};
