import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

import Head from "next/head";
import ViewAllProject from "./components/ViewAllProject";
import BuildingImage from "./components/BuildingImage";
// import Services from "../components/Services";
// import Portfolio from "../components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
// import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camping Gear Website</title>
        <meta
          name="description"
          content="Discover top-quality camping gear for unforgettable outdoor adventures."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
        <HomePage />
        <ViewAllProject />
        <BuildingImage />
        {/* <Services /> */}
        {/* <Portfolio /> */}
        <About />
        <Footer />
      
    </>
  );
}
