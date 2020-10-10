import React from 'react';
import './App.css';
import Header from './Components/Header';
import Web from './Components/Web';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App () {
   return (
      <div className="App">
        <Header />
        <Web />
        <Contact />
        <Footer />
      </div>
    );
  }

export default App;
