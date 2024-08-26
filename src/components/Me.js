import React from 'react';
import profilePicture from '../me.jpg';
import { FaEnvelope, FaInstagram, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import '../styles.css'; 
import backgroundVideo from '../5818973-hd_1920_1080_24fps.mp4'; // Import the video

const Me = () => {
  return (
    <section id="contact">
      {/* Content Section */}
      <div className='content'>
        <div className='image-container'>
            <img src={profilePicture} alt='Artem Mozhegov picture' className='profile-picture'/>
        </div>
        <h2>Artem Mozhegov</h2>
        <p><FaMapMarkerAlt /> Spain</p>
        <p><IoLanguage /> 🇬🇧 🇪🇸</p>
        <p><FaEnvelope /> <a href='mailto:amozhegov@yahoo.com'>amozhegov@yahoo.com</a></p>
        <p><FaInstagram /> <a href='https://www.instagram.com/artemmozhegov/'>artemmozhegov</a></p>
        <p><FaGithub /> <a href='https://github.com/amozhegov'>artemmozhegov</a></p>
      </div>
    </section>
  );
};


export default Me;

