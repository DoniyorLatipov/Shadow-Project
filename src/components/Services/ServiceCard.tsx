import React from 'react';
import classes from './Services.module.css';
import type { ServiceDescriptionListProps } from './ServiceDescriptionList';
import ServiceDescriptionList from './ServiceDescriptionList';

interface ServiceCardProps {
  title: string;
  descriptionList: ServiceDescriptionListProps[];
}

export default function ServiceCard({ title, descriptionList }: ServiceCardProps) {
  return (
    <div className={classes.servicesCard}>
      <h3 className={classes.serviceCardTitle}>{title}</h3>
      <ServiceDescriptionList list={descriptionList} />
    </div>
  );
}
