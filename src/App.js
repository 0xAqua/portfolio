import React from 'react';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Service/Service';
import Work from './components/Work/Work';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
