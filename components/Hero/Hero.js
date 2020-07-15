import style from './hero.module.css';
import Link from "next/link"

const Hero = () => {
    return (
        <section className={style.heroImg}>
            <h1 className={style.heroTitle}>Innovation Auto Repair</h1>
            <p className={style.heroText}>Our commitment is to repair  your vehicle to its pre-storm condition!</p>
            <Link href="/booking">
                <button className={style.button} variant="contained"><a>Book Free Estimate Now!</a></button>
            </Link>
        </section>
    )
}

export default Hero;