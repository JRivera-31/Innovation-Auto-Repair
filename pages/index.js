import Header from "../components/Header/Header";
import Hero from '../components/Hero/Hero';
import OurTeam from '../components/OurTeam/ourTeam';

export default function Home() {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&family=Staatliches&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chau+Philomene+One&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Header />
        <Hero />
        <OurTeam/>
      </body>
    </html>
  )
}
