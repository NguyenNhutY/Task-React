import React from 'react';
import people from '../../assets/people.png';
import video from '../../assets/p2-re.mp4';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Limitless technology, Driven by innovation</h1>
      <p>With advanced technology that goes beyond the limits of the market, we provide unique value that only INNORIX customers can have.</p>
      <br />
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
  </div>
);

export default Header;
