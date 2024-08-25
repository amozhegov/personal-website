import React from 'react';
import profilePicture from '/Users/artem/Documents/Programming/JavaScript/personal-website/src/me.jpg';
import { FaEnvelope, FaInstagram, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import '../styles.css'; 

const Me = () => {
  return (
    <section id="contact">
      <div className='image-container'>
          <img src={profilePicture} alt='Artem Mozhegov picture' className='profile-picture'/>
      </div>
      <h2>Artem Mozhegov</h2>
      <p> < FaMapMarkerAlt /> Spain</p>
      <p>< IoLanguage /> 🇬🇧 🇪🇸</p>
      <p>< FaEnvelope /> <a href='mailto:amozhegov@yahoo.com'>amozhegov@yahoo.com</a></p>
      <p>< FaInstagram /> <a href='https://www.instagram.com/artemmozhegov/'>artemmozhegov</a></p>
      <p>< FaGithub /> <a href='https://github.com/amozhegov'>artemmozhegov</a></p>
    </section>
  );
};


export default Me;

