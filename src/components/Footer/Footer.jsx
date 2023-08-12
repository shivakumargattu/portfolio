// src/App.js
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
        <p>Email: gshiva0018@gmail.com</p>
        <p>Phone: 8897414536</p>
        <div className="flex space-x-4 mt-4">
          <a
            href="mailto:gshiva0018@gmail.com"
            className="text-white hover:text-gray-300"
          >
            <FaEnvelope size={38} />
          </a>
          <a
            href="https://github.com/shivakumargattu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <AiFillGithub size={38}/>
          </a>
          <a
            href="https://www.linkedin.com/in/shiva-kumar-gattu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <AiFillLinkedin size={38} />
          </a>
        </div>
        <p className="mt-4">Location: Hyderabad</p>
        <p className="mt-2">&copy; 2023 Shiva Gattu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};



export default Footer
