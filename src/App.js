// import logo from './logo.svg';
// import Navbar from './components/Navbar';
// import {  Navbar } from 'react-bootstrap';
import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loader/Loading";
import NavbarComponent from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Certifications from "./components/certificate/Certifications";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/Contact/ContactMe";
import Projects from "./components/Project/Projects";
import Footer from "./components/Footer/Footer";

// import EasterEgg from './components/EasterEgg';
function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    // بعد 2.5 ثانية نبدأ الفيد أوت
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // بعد 3 ثواني نختفي نهائي
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading fadeOut={fadeOut} />
      ) : (
        <div>
          <NavbarComponent/>
          <Banner/>
          <Skills/>
          <Certifications/>
          <Projects/>
          <ContactMe />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
