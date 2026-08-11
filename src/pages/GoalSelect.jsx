import React from 'react';
import { Logo } from '../components/Logo';
import { goals } from '../data/goals';
import * as Icons from 'lucide-react';

export function GoalSelect({ onSelectGoal, onHome }) {
  return (
    <div className="min-h-screen bg-[var(--color-white)] flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center border-b border-[var(--color-border)] sticky top-0 bg-white z-10">
        <Logo onClick={onHome} />
      </header>
      
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--color-ink)] mb-2">What is your primary wellness goal?</h1>
          <p className="text-[var(--color-ink-soft)]">Select one to see our suggestions.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {goals.map((goal) => {
            const Icon = Icons[goal.icon];
            return (
            <button
              key={goal.id}
              onClick={() => onSelectGoal(goal)}
              className="relative overflow-hidden flex flex-col text-left p-6 rounded-[14px] border border-[var(--color-border)] bg-white hover:border-[var(--color-border)] hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-vital-green)] group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--color-vital-green)] transition-colors" />
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-vital-green)]/10 text-[var(--color-vital-green)]">
                {Icon && <Icon size={28} strokeWidth={2} />}
              </div>
              <span className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-deep-green)] transition-colors mb-1">
                {goal.name}
              </span>
              <span className="text-xs text-[var(--color-ink-soft)] leading-tight">
                {goal.sub}
              </span>
            </button>
          )})}
        </div>
      </main>
    </div>
  );
}
