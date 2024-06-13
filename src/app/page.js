import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./components/HomePage";
import Location from "./components/Location"
import Head from "next/head";
import ViewAllProject from "./components/ViewAllProject";
import BuildingImage from "./components/BuildingImage";
// import Services from "../components/Services";
// import Portfolio from "../components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import NavbarWeb from "./components/Navbar";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
// import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <NavbarWeb />
      
        <HomePage />
        <ViewAllProject />
        <BuildingImage />
        <Testimonials />
        {/* <Services /> */}
        {/* <Portfolio /> */}
        <Partners />
        <Project />
        {/* <About /> */}
        <Location />
        <Contact />
        <Footer />
      
    </>
  );
}
