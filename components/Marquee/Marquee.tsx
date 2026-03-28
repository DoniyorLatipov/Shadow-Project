'use client';

import styles from './Marquee.module.css';

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {Array.from({ length: 10 }).map((_, index) => (
          <img
            src="/assets/logo-width-white.svg"
            key={index}
            className={styles.logo}
            alt="Shadow Project"
          />
        ))}
      </div>

      <div className={styles.track}>
        {Array.from({ length: 10 }).map((_, index) => (
          <img
            src="/assets/logo-width-white.svg"
            key={index}
            className={styles.logo}
            alt="Shadow Project"
          />
        ))}
      </div>
    </div>
  );
}
