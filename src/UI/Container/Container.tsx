import React from 'react';
import classes from './Container.module.css';

import clsx from 'clsx';

interface ContainerProps extends React.PropsWithChildren {
  maxWidth?: string;
  className?: string;
}

export default function Container({ maxWidth = '1620px', className, children }: ContainerProps) {
  return (
    <div style={{ maxWidth }} className={clsx(classes.container, className)}>
      {children}
    </div>
  );
}
