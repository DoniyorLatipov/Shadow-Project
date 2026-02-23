import React from 'react';
import classes from './Button.module.css';

import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={clsx(className, classes.button)} {...props}>
      {children}
    </button>
  );
}
