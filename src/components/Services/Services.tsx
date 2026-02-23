import React, { useState } from 'react';
import classes from './Services.module.css';
import Marquee from '../Marquee/Marquee';
import Container from '../../UI/Container/Container';
import ServiceCard from './ServiceCard';
import { servicesData } from './ServicesData';
import AnchorButton from '../../UI/AnchorButton/AnchorButton';

export default function Services() {
  const [services] = useState(servicesData);

  return (
    <div className={classes.services} id="services">
      <Marquee />
      <Container className={classes.serviceContainer}>
        <AnchorButton href="#services" className={classes.anchorButtonToServices}>
          Услуги
        </AnchorButton>
        {services.map(({ title, descriptionList }) => (
          <ServiceCard title={title} descriptionList={descriptionList} />
        ))}
        <AnchorButton href="#contacts" className={classes.anchorButtonToContacts}>
          Заказать
        </AnchorButton>
      </Container>
    </div>
  );
}
