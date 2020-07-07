import Header from "../components/Header/Header";
import Hero from '../components/Hero/Hero';
import OurTeam from '../components/OurTeam/ourTeam';
import About from "../components/About/about"
import Form from "../components/ContactForm/contact"

export default function Home() {
  return (
    <html>
      <head>
        <title>Innovation Auto</title>
        <link href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&family=Staatliches&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chau+Philomene+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Header />
        <Hero />
        <About />
        <OurTeam />
        <Form />
      </body>
    </html>
  )
}
