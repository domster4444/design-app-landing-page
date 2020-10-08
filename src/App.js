import React from 'react';
import designs1 from './images/designs1.png'
import interfaceOne from './images/interface.png'
import logo from './images/logo.png'
import './App.css'

function App() {
  return (
    <div>
    {/*main-section------------*/}
    <section id="main">
      {/*navigation--------*/}
      <nav>
        {/*logo------*/}
        <a href="logo" className="logo"><img src={logo} alt="logo" /></a>
        {/*menu-bar-icon--------*/}
        <div className="menu-icon" />
        {/*menu-------*/}
        <ul className="menu">
          <li><a href="home">Home</a></li>	
          <li><a href="about">About</a></li>	
          <li><a href="contact">Contact</a></li>	
          <li><a href="team">Team</a></li>	
        </ul>
      </nav>
      {/*box--------------*/}
      <div className="main-box">
        {/*text--------*/}
        <div className="text">
          <span><font>We Do </font>What You Want</span>
          <h2>User Interface</h2>
          <p>Minimal And Beautiful User Interface For Your Upcoming Projects.</p>
          {/*btn-------*/}
          <a href="ourwork" className="btn">Our Work</a>
        </div>
        {/*img-----------*/}
        <div className="img">
          <img src={interfaceOne} alt="interface" />	
        </div>
      </div>
      {/*footer---------*/}
      <footer>
        {/*social------*/}
        <div className="social">
          <a href="facebook"><i className="fab fa-facebook-f" /></a>	
          <a href="twitter"><i className="fab fa-twitter" /></a>	
          <a href="youtube"><i className="fab fa-youtube" /></a>	
        </div>
        {/*copyright--------*/}
        <div className="copyright">Copyright 2020 - Kshitiz</div>
      </footer>
      {/*arrow---------*/}
      <div className="arrow" />
    </section>
    {/*subscribe-section---------*/}
    <section className="subscribe">
      {/*img-----*/}
      <img src={designs1} alt="designs" />
      <h2>Subscribe For Posts Notifications</h2>
      {/*input---------------*/}
      <div className="search">
        <input type="text" placeholder="Example@gmail.com" />
        <a href="send">Send</a>
      </div>
      {/*copyright---*/}
      <div className="right">Copyright 2020 - Kshitiz</div>
    </section>
  </div>
  );
}

export default App;
