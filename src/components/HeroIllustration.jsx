// src/components/HeroIllustration.jsx
// Custom animated wellness illustration for the Vitalink landing hero.
// No external image assets needed — pure inline SVG + CSS animation,
// built entirely from brand colors (STYLE_GUIDE.md).
// Combines: a heartbeat/pulse line (health), a leaf (wellness/natural),
// and soft floating gradient orbs, with gentle continuous motion.

import React from "react";

export default function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />

      <svg
        className="hero-pulse"
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="hero-pulse-path"
          d="M0 60 H120 L140 20 L165 100 L190 60 L210 60 L225 40 L245 60 H400"
          stroke="url(#pulseGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="pulseGradient" x1="0" y1="0" x2="400" y2="0">
            <stop offset="0%" stopColor="#0EC176" />
            <stop offset="100%" stopColor="#049FF3" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="hero-float hero-float--leaf" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" fill="#FFFFFF" />
        <circle cx="24" cy="24" r="23" fill="#0EC176" fillOpacity="0.08" />
        <path
          d="M24 9C24 9 36 14 36 26C36 33.5 30.5 39 24 39C17.5 39 12 33.5 12 26C12 14 24 9 24 9Z"
          fill="#83D40E"
        />
        <path d="M24 12V36" stroke="#3F773C" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <svg className="hero-float hero-float--link" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" fill="#FFFFFF" />
        <circle cx="24" cy="24" r="23" fill="#049FF3" fillOpacity="0.08" />
        <path d="M15 29 C15 22, 22 22, 25 25 C28 28, 35 28, 35 21" stroke="#83D40E" strokeWidth="5" strokeLinecap="round"/>
        <path d="M12 19 C12 26, 19 26, 22 23 C25 20, 32 20, 32 27" stroke="#049FF3" strokeWidth="5" strokeLinecap="round"/>
      </svg>

      <div className="hero-dot hero-dot--1" />
      <div className="hero-dot hero-dot--2" />
      <div className="hero-dot hero-dot--3" />
    </div>
  );
}
