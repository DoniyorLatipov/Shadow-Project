import styles from './Marquee.module.css';
import logo from '../../assets/logo-width-white.svg';

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {Array.from({ length: 10 }).map((_, index) => (
          <img src={logo} key={index} className={styles.logo} />
        ))}
      </div>

      <div className={styles.track}>
        {Array.from({ length: 10 }).map((_, index) => (
          <img src={logo} key={index} className={styles.logo} />
        ))}
      </div>
    </div>
  );
}
