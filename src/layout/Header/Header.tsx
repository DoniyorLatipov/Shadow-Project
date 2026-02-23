import { useEffect, useState } from 'react';
import classes from './Header.module.css';

import Container from '../../UI/Container/Container';
import Button from '../../UI/Buttons/Button';

import logoDesktop from '../../assets/logo.svg';
import logoMobile from '../../assets/logo-width.svg';
import telegramIcon from '../../assets/telegram-icon.svg';
import maxIcon from '../../assets/max-icon.svg';
import callIcon from '../../assets/call-icon.svg';

import clsx from 'clsx';

export default function Header() {
  const [isActive, setIsActive] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={clsx(classes.header, isActive && classes.headerActive)}>
      <Container maxWidth="1780px" className={classes.headerContainer}>
        <picture>
          <source media="(max-width: 640px)" srcSet={logoMobile} />
          <img
            src={logoDesktop}
            className={classes.logo}
            width="240"
            height="77"
            alt="Shadow Project"
          />
        </picture>
        <div className={classes.buttonContainer}>
          <Button className={classes.iconButton}>
            <img src={telegramIcon} height="48" width="48" alt="Телеграм" />
          </Button>
          <Button className={classes.iconButton}>
            <img src={maxIcon} height="48" width="48" alt="Макс" />
          </Button>
          <Button className={classes.callButton}>
            <span className={classes.callText}>Позвонить</span>
            <img
              className={classes.callIcon}
              src={callIcon}
              height="48"
              width="48"
              alt="Позвонить нам"
            />
          </Button>
        </div>
      </Container>
    </div>
  );
}
