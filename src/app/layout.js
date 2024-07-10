import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from "./components/HeaderNavbar";
import NavbarWeb from "./components/Navbar";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BCA Corp",
  description: "BCA Corp",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <HeaderNavbar />
        <NavbarWeb />
        {children}
        <Footer />
        </body>
    </html>
  );
}
