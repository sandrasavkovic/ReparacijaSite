import React, { useState, useEffect } from "react";
import "./Home.css";

import Before1 from "./photos/Before1.jpg";
import Before2 from "./photos/Before2.jpg";
import Before3 from "./photos/Before3.jpg";
import After1 from "./photos/After1.jpg";
import After2 from "./photos/After2.jpg";
import After3 from "./photos/After3.jpg";

const slides = [
  {
    src: Before1,
    text: "Profesionalna reparacija za sve vrste oštećenja",
    button: { label: "Detaljnije", href: "/about" }
  },
  {
    src: After1,
    text: "Reparacija koja vraća originalni sjaj",
    button: { label: "Detaljnije", href: "/about" }
  },
  {
    src: Before2,
    text: "Servis sa dugogodisnjim iskustvom",
    button: { label: "Detaljnije", href: "/about" }
  },
  {
    src: After2,
    text: "Kvalitet, brzina i sigurnost na jednom mestu",
    button: { label: "Detaljnije", href: "/about" }
  },
  {
    src: Before3,
    text: "Pre - oštećena površina",
    button: { label: "Detaljnije", href: "/about" }
  },
  {
    src: After3,
    text: "Posle - zadovoljan klijent",
    button: { label: "Detaljnije", href: "/about" }
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="carousel-container">
    <div className="carousel-box">
       <div className="carousel-inner">
      {/* RENDER SVI SLIDE-OVI (s fade efektom) */}
      {slides.map((s, i) => (
        <img
          key={i}
          className={`carousel-image ${i === index ? "active" : ""}`}
          src={s.src}
          alt={s.text || `slide-${i}`}
        />
      ))}

      <div className="carousel-overlay"></div>

      <div className="carousel-content">
        <h2 className="carousel-text">{slides[index].text}</h2>
        {slides[index].button && (
          <a className="carousel-cta" href={slides[index].button.href}>
            {slides[index].button.label}
          </a>
        )}
      </div>
      </div>

      <button className="carousel-arrow left" onClick={prevSlide}>‹</button>
      <button className="carousel-arrow right" onClick={nextSlide}>›</button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`carousel-dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      </div>
    </section>
   
  );
}
