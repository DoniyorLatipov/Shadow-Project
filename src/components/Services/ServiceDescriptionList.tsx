import React from 'react';
import classes from './Services.module.css';

interface IconProps {
  iconSrc: string;
  alt: string;
}

export interface ServiceDescriptionListProps {
  icon: IconProps;
  text: string;
}

function ServiceDescriptionListItem({ icon, text }: ServiceDescriptionListProps) {
  const { iconSrc, alt } = icon;

  return (
    <li className={classes.descriptionListIten}>
      <img src={iconSrc} alt={alt} className={classes.descriptionIcon} />
      <span className={classes.descriptionText}>{text}</span>
    </li>
  );
}

export default function ServiceDescriptionList({ list }: { list: ServiceDescriptionListProps[] }) {
  return (
    <ul className={classes.descriptionList}>
      {list.map((props, idx) => (
        <ServiceDescriptionListItem key={idx} {...props} />
      ))}
    </ul>
  );
}
