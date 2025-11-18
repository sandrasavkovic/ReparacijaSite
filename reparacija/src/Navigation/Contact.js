import React, { useState } from "react";
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const apiUrl = process.env.REACT_APP_API_URL ;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if(response.ok){
        toast.success('Vaša poruka je uspešno poslata!');
        setFormData({name: '', email: '', message:''});
      } else {
        toast.error('Slanje poruke nije uspelo. Pokušajte ponovo kasnije.');
      }

    } catch(error) {
      console.error('Error sending message:', error);
      toast.error('Greška prilikom slanja. Proverite internet ili pokušajte ponovo.');
    }
  }

  return (
    <section className="contact-container">
      <div className="contact-box">
        <div className="contact-section">
        <h1>Kontaktirajte nas</h1>
        <p>
          Ako želite da saznate više o našim uslugama ili ste zainteresovani za saradnju,
          pošaljite nam poruku. Odgovorićemo što pre!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Vaše ime"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Vaš email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Vaša poruka"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Pošalji poruku</button>
        </form>
        </div>
      </div>
       <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </section>
 
  );
}
