// src/pages/Landing.jsx
import React from "react";
import { Logo } from "../components/Logo";
import HeroIllustration from "../components/HeroIllustration";

export function Landing({ onStart, onHome }) {
  return (
    <div>
      <nav className="topnav">
        <Logo onClick={onHome} />
        <button className="nav-cta" onClick={onStart}>
          Get Started
        </button>
      </nav>

      <section id="landing" style={{ textAlign: "center" }}>
        <div className="eyebrow">
          <span className="dot" /> Your AI Wellness Companion
        </div>

        <h1>
          Discover your personalized path to better wellness
        </h1>

        <p className="lede">
          Select a wellness goal to get tailored suggestions, and connect with
          a guide to begin your journey.
        </p>

        <HeroIllustration />

        <div className="landing-actions" style={{ marginTop: "1.5rem" }}>
          <button className="btn-primary" onClick={onStart}>
            Get Started
          </button>
        </div>

        <div className="disclaimer-strip">
          <strong>Important:</strong> Vitalink offers general wellness
          information only and is not intended to diagnose, treat, cure, or
          prevent any disease. Always consult a licensed healthcare
          professional for medical concerns.
        </div>
      </section>
    </div>
  );
}