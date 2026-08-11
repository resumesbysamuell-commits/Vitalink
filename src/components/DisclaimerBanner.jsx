import React from 'react';

export function DisclaimerBanner() {
  return (
    <div className="bg-[var(--color-bg-tint)] border border-[var(--color-border)] p-4 rounded-[14px] text-sm text-[var(--color-ink-soft)] leading-relaxed mt-8 mb-4">
      <strong>Important:</strong> Vitalink offers general wellness information only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult a licensed healthcare professional for medical concerns.
    </div>
  );
}
