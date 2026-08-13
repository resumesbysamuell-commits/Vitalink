import React from "react";
import { Logo } from "../components/Logo";
import HeroIllustration from "../components/HeroIllustration";

export function Landing({ onStart, onHome }) {
  return (
    <div className="min-h-screen bg-[var(--color-white)] flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center border-b border-[var(--color-border)] sticky top-0 bg-white z-10">
        <Logo onClick={onHome} />
        <button
          className="bg-[var(--color-vital-green)] hover:bg-[var(--color-deep-green)] text-white font-medium px-6 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-vital-green)] min-h-[44px]"
          onClick={onStart}
        >
          Get Started
        </button>
      </header>

      <main className="flex-1 px-4 py-12 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-bg-tint)] border border-[var(--color-border)] text-sm font-medium text-[var(--color-ink-soft)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" /> 
          Your AI Wellness Companion
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--color-ink)] mb-6 font-poppins">
          Discover your personalized path to better wellness
        </h1>

        <p className="text-base sm:text-lg text-[var(--color-ink-soft)] mb-10 max-w-2xl">
          Select a wellness goal to get tailored suggestions, and connect with
          a guide to begin your journey.
        </p>

        <div className="w-full max-w-[90vw] sm:max-w-lg mx-auto relative my-8 overflow-hidden flex justify-center">
          <HeroIllustration />
        </div>

        <div className="mt-10">
          <button
            className="bg-[var(--color-vital-green)] hover:bg-[var(--color-deep-green)] text-white font-medium px-8 py-3 rounded-full text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-vital-green)]"
            onClick={onStart}
          >
            Get Started
          </button>
        </div>

        <div className="mt-16 p-5 rounded-xl bg-[var(--color-bg-tint)] border border-[var(--color-border)] text-sm text-[var(--color-ink-soft)] text-left w-full max-w-3xl">
          <strong className="text-[var(--color-ink)] font-semibold">Important:</strong> Vitalink offers general wellness
          information only and is not intended to diagnose, treat, cure, or
          prevent any disease. Always consult a licensed healthcare
          professional for medical concerns.
        </div>
      </main>
    </div>
  );
}