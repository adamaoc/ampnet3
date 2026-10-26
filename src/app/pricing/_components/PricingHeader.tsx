'use client';

import { CheckCircle } from 'lucide-react';

type PricingHeaderProps = {
  clientId?: string;
};

export default function PricingHeader({ clientId }: PricingHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="mb-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-6xl">
        Pricing
      </h1>

      {clientId && (
        <div className="mb-6 p-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300">
            <CheckCircle className="h-5 w-5 text-teal-600 dark:text-pink-400" />
            <span className="font-medium">Custom pricing for: {clientId}</span>
          </div>
        </div>
      )}

      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Pricing for web development projects. Every estimate is tailored to
        the work.
      </p>
    </div>
  );
}
