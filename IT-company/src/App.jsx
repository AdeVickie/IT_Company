import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import HeaderNav from "./Component/HeaderNavBar";
import About from "./Component/About";
import ChooseUs from "./Component/ChooseUs";
import Services from "./Component/Services";
import ServicesTwo from "./Component/Services2";
import Carousel from "./Component/Carousel";
import ChoosePlans from "./ChoosePlans";
import Team from "./Team";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeaderNav />
      <About />
      <ChooseUs />
      <Services />
      <ServicesTwo />
      <Carousel />
      <ChoosePlans />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
