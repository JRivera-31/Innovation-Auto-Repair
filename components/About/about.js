import styles from "./about.module.css";
import Carousel from "react-bootstrap/Carousel";

export default function About() {
  return (
    <div className={styles.aboutBody} id="about-section">
      <div className={styles.heading}>
        <h1>About</h1>
        <hr className={styles.aboutHr} />
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Innovation Auto Hail Repair works to restore your vehicle to its
            pre-storm condition. We work to bring back the value to your car.
            With experienced technicians working on your vehicle we can
            guarantee your vehicle is in good hands.
          </p>
          <p>
            <span className={styles.boldText}>
              Don’t have insurance? No problem!
            </span>{" "}
            We give special discounts for those paying out of pocket.
          </p>
          <p>Have a non-hail related dent? We fix those too!</p>
          <p className={styles.boldText}>
            <a className={styles.anchor} href="#contact-section">
              Please contact us with any questions or concerns.
            </a>
          </p>
        </div>
      </div>
      
          <div className={styles.carouselContainer}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/125"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/125"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/125"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
    </div>
  );
}
