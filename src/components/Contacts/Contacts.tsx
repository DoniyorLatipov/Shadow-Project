import classes from './Contacts.module.css';
import Container from '../../UI/Container/Container';
import Button from '../../UI/Buttons/Button';

import footerLogo from '../../assets/logo-footer.svg';
import telegramIcon from '../../assets/telegram-icon.svg';
import maxIcon from '../../assets/max-icon.svg';

import clsx from 'clsx';

export default function Contacts() {
  return (
    <div className={classes.contacts} id="contacts">
      <Container className={classes.contactsContainer}>
        <div className={classes.contactsBlock}>
          <h2 className={classes.title}>Контакты</h2>
          <ul className={classes.contactsList}>
            <li className={classes.contactsListItem}>
              <h3 className={classes.subtitle}>Телефон</h3>
              <a href="tel:+79643749631" className={clsx(classes.text, classes.link)}>
                +7 (964) 374-96-31
              </a>
            </li>

            <li className={classes.contactsListItem}>
              <h3 className={classes.subtitle}>График</h3>
              <time dateTime="Mo-Sun 09:00-21:00" className={classes.text}>
                Ежедневно, 09:00–21:00
              </time>
            </li>

            <li className={classes.contactsListItem}>
              <h3 className={classes.subtitle}>Выезд</h3>
              <address className={classes.text}>
                Санкт-Петербург,
                <br />
                Ленинградская область
              </address>
            </li>
          </ul>
        </div>
        <div className={classes.logoBlock}>
          <picture>
            <img
              src={footerLogo}
              className={classes.logo}
              width="790"
              height="275"
              alt="Shadow Project"
            />
          </picture>
          <div className={classes.buttonsContainer}>
            <Button className={classes.callButton}>
              <a href="tel:+79643749631">Позвонить</a>
            </Button>
            <Button className={classes.iconButton}>
              <a href="https://t.me/mihail_shadow_project" target="_blank">
                <img src={telegramIcon} alt="Телеграм" width="80" height="80" />
              </a>
            </Button>
            <Button className={classes.iconButton}>
              <a
                href="https://max.ru/u/f9LHodD0cOKcfqGZKOMdLR3D5vwj4vXCuDJgiurBzrWqnJt0e4fZGGOSgYo"
                target="_blank"
              >
                <img src={maxIcon} alt="Макс" width="80" height="80" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
