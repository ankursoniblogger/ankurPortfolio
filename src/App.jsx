import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Experties from "./components/Experties";
import CalltoAction from "./components/CalltoAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-darkGreen scroll-smooth font-Jack py-10 px-4 h-full">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Experties />
      <CalltoAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
