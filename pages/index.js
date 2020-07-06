import Header from "../components/Header/Header";
import Head from "next/head"
import Hero from '../components/Hero/Hero';
import Layout from "../components/layout"

export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
    </div>
  )
}
