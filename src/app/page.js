import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';
import HomePage from "./components/HomePage";
import Location from "./components/Location"
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
import LatestNews from "./components/LatestNews";
import ModernCarousel from "./components/ModernCarousel";
import CompanyVideo from "./components/CompanyVideo";
import Commercial from "./components/Commercial";
import News from "./components/News";
// import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
   
      <ModernCarousel />
      {/* <News /> */}
        <Team />
      <Commercial />
      {/* <CompanyVideo /> */}
        {/* <HomePage /> */}
        {/* <ViewAllProject /> */}

        {/* <LatestNews /> */}
        {/* <Services /> */}
        {/* <Portfolio /> */}

        <Partners />
        {/* <Project /> */}
        <Testimonials />

        {/* <BuildingImage /> */}
        <About />

        <Location />
        <Contact />
      
    </>
  );
}
