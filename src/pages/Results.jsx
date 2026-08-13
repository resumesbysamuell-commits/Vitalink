import React from 'react';
import { Logo } from '../components/Logo';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { WhatsAppButton } from '../components/WhatsAppButton';
import * as Icons from 'lucide-react';

export function Results({ goal, onBack, onHome }) {
  if (!goal) return null;
  const GoalIcon = Icons[goal.icon];

  return (
    <div className="min-h-screen bg-[var(--color-bg-tint)] flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center bg-white border-b border-[var(--color-border)] sticky top-0 z-10">
        <Logo onClick={onHome} />
        <button 
          onClick={onBack}
          className="text-sm font-medium text-[var(--color-sky-blue)] hover:text-[var(--color-deep-green)] transition-colors focus:outline-none min-h-[44px] flex items-center px-2"
        >
          Back to goals
        </button>
      </header>

      <main className="flex-1 px-4 py-8 max-w-xl mx-auto w-full">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-vital-green)]/10 text-[var(--color-vital-green)] mb-4">
            {GoalIcon && <GoalIcon size={32} strokeWidth={2} />}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-2">
            Suggestions for: {goal.name}
          </h1>
          <p className="text-[var(--color-ink-soft)]">
            Here are some suggestions often associated with supporting your {goal.name.toLowerCase()} goals.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {goal.products.map((product, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[14px] border border-[var(--color-border)] hover:border-[var(--color-border)] hover:shadow-md transition-all group">
              <div className="flex items-start gap-3">
                <Icons.Sparkles size={20} className="text-[var(--color-vital-green)] shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-[var(--color-ink)] group-hover:text-[var(--color-deep-green)] transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[var(--color-ink-soft)] leading-relaxed text-sm sm:text-base">
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
