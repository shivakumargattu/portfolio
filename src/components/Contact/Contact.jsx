// src/App.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="min-h-screen  bg-black flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md resize-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-white  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;
