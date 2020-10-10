import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Web from './Components/Web';
import Photography from './Components/Photography';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App () {
   return (
      <div className="App">
        <Header />
        <About />
        <Web />

        <Photography />
        <Contact />
        <Footer />
      </div>
    );
  }

export default App;
