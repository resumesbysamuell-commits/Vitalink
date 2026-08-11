import React from 'react';
import logoIcon from '../assets/logo-icon.png';

export function Logo({ onClick }) {
  const isClickable = typeof onClick === 'function';
  const Container = isClickable ? 'button' : 'div';
  return (
    <Container 
      onClick={onClick}
      className={`flex items-center gap-3 select-none ${isClickable ? 'cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-vital-green)] rounded-lg' : ''}`}
    >
      <div className="relative flex items-center justify-center w-10 h-10">
        <img src={logoIcon} alt="Vitalink Logo" className="w-full h-full object-contain" />
      </div>
      <span className="font-poppins font-bold text-xl tracking-tight">
        <span className="text-[var(--color-deep-green)]">Vita</span>
        <span className="text-[var(--color-sky-blue)]">link</span>
      </span>
    </Container>
  );
}
