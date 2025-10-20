'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatPriceRange, projectTypes } from '@/data/pricing';
import { CheckCircle } from 'lucide-react';

export default function ProjectTypes() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
        Project Types & Complexity
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectTypes.map((project, index) => (
          <Card
            key={index}
            className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100 mb-3">
                {project.name}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {formatPriceRange(
                    project.costRange.min,
                    project.costRange.max
                  )}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Starting price
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 text-teal-600 dark:text-pink-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 text-xs">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-2">
            💡 <strong>Projects that use existing internal platforms</strong>{' '}
            (like FlexHub) benefit from lower setup costs and faster delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
