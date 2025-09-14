'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
    <>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Services />
    <Contact/>
    <Footer />
    </>
  )
}
