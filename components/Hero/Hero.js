import style from './hero.module.css';
import { Button } from '@material-ui/core';

const Hero = () => {
    return (
        <section className={style.heroImg}>
            <h1 className={style.heroTitle}>Innovation Auto Repair</h1>
            <p className={style.heroText}>Our commitment is to repair  your vehicle to its pre-storm condition!</p>
            <Button variant="contained">Book With Us</Button>
        </section>
    )
}

export default Hero;