import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import OurTeam from "../components/OurTeam/ourTeam";
import About from "../components/About/about";
import Form from "../components/ContactForm/contact";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Innovation Auto</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet"></link>
        <link
          rel="shortcut icon"
          type="img/png"
          href="../public/images/Innovation_Logo-no-bg.png"
        />
      </head>
      <body>
        <Header />
        <Hero />
        <About />
        <OurTeam />
        <Form />
      </body>
    </html>
  );
}
