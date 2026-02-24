import classes from './Hero.module.css';
import Container from '../../UI/Container/Container';
import Button from '../../UI/Buttons/Button';

export default function Hero() {
  return (
    <div className={classes.hero} id="hero">
      <Container className={classes.heroContainer}>
        <h1 className={classes.title}>Натяжные потолки</h1>
        <p className={classes.subtitle}>
          Работаем с готовыми потолками, сложными случаями и профилем EuroKRAAB по Санкт-Петербург и
          Ленинградской области
        </p>
        <Button className={classes.callButton}>
          <a href="tel:+79643749631">Позвонить</a>
        </Button>
      </Container>
    </div>
  );
}
