import React from 'react';
import { Logo } from '../components/Logo';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function Results({ goal, onBack, onHome }) {
  if (!goal) return null;

  return (
    <div className="min-h-screen bg-[var(--color-bg-tint)] flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center bg-white border-b border-[var(--color-border)] sticky top-0 z-10">
        <Logo onClick={onHome} />
        <button 
          onClick={onBack}
          className="text-sm font-medium text-[var(--color-sky-blue)] hover:text-[var(--color-deep-green)] transition-colors focus:outline-none focus:underline"
        >
          Change Goal
        </button>
      </header>

      <main className="flex-1 px-4 py-8 max-w-xl mx-auto w-full">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-[var(--color-border)] text-3xl mb-4 shadow-sm">
            {goal.icon}
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-ink)] mb-2">{goal.name}</h1>
          <p className="text-[var(--color-ink-soft)]">
            Here are some suggestions often associated with supporting your {goal.name.toLowerCase()} goals.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {goal.products.map((product, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[14px] border border-[var(--color-border)] shadow-sm">
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-lime)] mt-1.5 shrink-0"></span>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[var(--color-ink-soft)] leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-[14px] border border-[var(--color-border)] shadow-sm text-center mb-8">
          <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Ready to take the next step?</h3>
          <p className="text-[var(--color-ink-soft)] text-sm mb-6">
            Connect with a real human distributor to ask questions or purchase these products.
          </p>
          <WhatsAppButton goalName={goal.name} />
        </div>

        <DisclaimerBanner />
      </main>
    </div>
  );
}
