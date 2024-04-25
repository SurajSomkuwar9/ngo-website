import Head from "next/head";
import Carousal from "../components/home/Carousal";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CoreTeam from "../components/home/CoreTeam";
import Donate from "../components/home/Donate";
import About from "../components/home/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>HPO | Health Promotion Organization</title>
        <link rel="icon" href="public/logo.png" />
      </Head>

      <main className="">
        <Navbar />
        <Hero />
        <Carousal />
        <Stats />
        <Donate />
        <Testimonials />
        <CoreTeam />
        <About />
      </main>

      <Footer />
    </>
  );
}
