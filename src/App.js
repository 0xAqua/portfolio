import React from 'react';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Service/Service';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Service /> */}
      <Blog />
    </div>
  );
}

export default App;
