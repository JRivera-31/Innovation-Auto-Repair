import Layout from '../components/Layout/layout';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import OurTeam from '../components/OurTeam/ourTeam';
import About from '../components/About/about';
import Form from '../components/ContactForm/contact';

export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>Innovation Auto</title>
        </Head>
        <Hero />
        <About />
        <OurTeam />
        <Form />
    </Layout>
  );
};