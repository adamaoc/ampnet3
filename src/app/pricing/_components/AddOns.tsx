'use client';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { addOnServices } from '@/data/pricing';
import { DollarSign, Plus, Sparkles } from 'lucide-react';

export default function AddOns() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
        Optional Add-Ons
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addOnServices.map((service, index) => (
          <Card
            key={index}
            className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-900 dark:text-slate-100">
                    {service.name}
                  </CardTitle>
                </div>
                <div className="flex items-center gap-1 text-teal-600 dark:text-pink-400 font-bold text-lg">
                  <DollarSign className="h-4 w-4" />
                  <span>{service.price}</span>
                </div>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-3xl shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Custom Add-Ons Available
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Need something specific? We can create custom solutions tailored to
            your unique requirements. Every project is different, and we&apos;re
            here to make sure you get exactly what you need.
          </p>
        </div>
      </div>
    </div>
  );
}
