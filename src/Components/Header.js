import React from 'react';

function Header () {
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#web">UX Design + Development</a></li>
            <li><a className="smoothscroll" href="#portfolio">Content</a></li>
            <li><a className="smoothscroll" href="#photography">Photography</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
               <h1>Briana daMota</h1>
                  <p>I'm a UX designer, full stack developer, and content producer.</p>
                  <p>In my spare time, a photographer and music lover.</p>
                  <p>Always a wanderluster.</p>
                  <ul className="social">
                  <li><a href="https://www.linkedin.com/in/brianadamota/" target="blank"> <i className="fa fa-linkedin"></i> </a></li>
                  <li><a href="https://github.com/bdamota" target="blank"> <i className="fa fa-github"></i> </a></li>
                  </ul>
             </div>
             </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }


export default Header;

