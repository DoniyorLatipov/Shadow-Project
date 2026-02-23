import React from 'react';
import { useLenis } from 'lenis/react';
import clsx from 'clsx';

import classes from './AnchorButton.module.css';

import arrowDown from '../../assets/arrow-down-icon.svg';

interface AnchorButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isUp?: boolean;
  href: string;
}

export default function AnchorButton({
  isUp = false,
  href,
  children,
  className,
  ...rest
}: AnchorButtonProps) {
  const lenis = useLenis();

  const handleClick = () => {
    if (!lenis) return;
    lenis.scrollTo(href);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(classes.button, className)}
      {...rest}
    >
      {children}
      <img
        src={arrowDown}
        width="14"
        className={isUp ? classes.imgUp : ''}
        alt={`Стрелка ${isUp ? 'вверх' : 'вниз'}`}
      />
    </button>
  );
}
