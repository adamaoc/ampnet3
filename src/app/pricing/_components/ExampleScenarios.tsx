'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { exampleScenarios } from '@/data/pricing';
import { Calendar, Code, DollarSign, Server } from 'lucide-react';

export default function ExampleScenarios() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
        Real-World Examples
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {exampleScenarios.map((scenario, index) => (
          <Card
            key={index}
            className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100 mb-2">
                {scenario.title}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                {scenario.type}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Server className="h-4 w-4 text-teal-600 dark:text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Infrastructure
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {scenario.infrastructure}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code className="h-4 w-4 text-teal-600 dark:text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Technology Stack
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {scenario.stack}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-4 w-4 text-teal-600 dark:text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Investment
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {scenario.cost}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calendar className="h-5 w-5 text-teal-600 dark:text-pink-400" />
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              Ready to Get Started?
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Every project starts with a discovery call and written proposal
            outlining scope and deliverables.
          </p>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            All prices are starting points and subject to adjustment based on
            timeline, revisions, and complexity.
          </div>
        </div>
      </div>
    </div>
  );
}
