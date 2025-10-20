'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { engagementModels } from '@/data/pricing';
import { AlertCircle, CheckCircle, Star } from 'lucide-react';

export default function EngagementModels() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
        Engagement Models
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {engagementModels.map((model, index) => (
          <Card
            key={index}
            className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
                  {model.name}
                </CardTitle>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-300 text-lg">
                {model.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Billing Model
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {model.billingModel}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  What&apos;s Included
                </h4>
                <ul className="space-y-2">
                  {model.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 dark:text-pink-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {model.benefits && (
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {model.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Considerations
                </h4>
                <ul className="space-y-2">
                  {model.considerations.map(
                    (consideration, considerationIndex) => (
                      <li
                        key={considerationIndex}
                        className="flex items-start gap-2"
                      >
                        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {consideration}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
