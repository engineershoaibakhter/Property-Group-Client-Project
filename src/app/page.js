import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';
import HomePage from "./components/HomePage";
import Location from "./components/Location"
import Head from "next/head";
import ViewAllProject from "./components/ViewAllProject";
import BuildingImage from "./components/BuildingImage";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import NavbarWeb from "./components/Navbar";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import HeaderNavbar from "./components/HeaderNavbar";
import Team from "./components/Team";
// import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <HeaderNavbar />
      <NavbarWeb />
        <HomePage />
        <ViewAllProject />
        <Team />
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
