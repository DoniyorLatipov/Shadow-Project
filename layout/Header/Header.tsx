'use client';

import { useEffect, useState } from 'react';
import classes from './Header.module.css';

import Container from '../../UI/Container/Container';
import Button from '../../UI/Buttons/Button';

import clsx from 'clsx';

export default function Header() {
  const [isActive, setIsActive] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={clsx(classes.header, isActive && classes.headerActive)}>
      <Container maxWidth="1780px" className={classes.headerContainer}>
        <a href="/">
          <picture>
            <source media="(max-width: 640px)" srcSet="/assets/logo-width.svg" />
            <img
              src="/assets/logo.svg"
              className={classes.logo}
              width="240"
              height="77"
              alt="Shadow Project"
            />
          </picture>
        </a>
        <div className={classes.buttonContainer}>
          <a href="https://t.me/mihail_shadow_project" target="_blank" rel="noreferrer">
            <Button className={classes.iconButton}>
              <img src="/assets/telegram-icon.svg" height="48" width="48" alt="Телеграм" />
            </Button>
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOKcfqGZKOMdLR3D5vwj4vXCuDJgiurBzrWqnJt0e4fZGGOSgYo"
            target="_blank"
            rel="noreferrer"
          >
            <Button className={classes.iconButton}>
              <img src="/assets/max-icon.svg" height="48" width="48" alt="Макс" />
            </Button>
          </a>
          <a href="tel:+79643749631">
            <Button className={classes.callButton}>
              <span className={classes.callText}>Позвонить</span>
              <img
                className={classes.callIcon}
                src="/assets/call-icon.svg"
                height="48"
                width="48"
                alt="Позвонить нам"
              />
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
}
