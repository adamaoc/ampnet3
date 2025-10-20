'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { flexHubFeatures } from '@/data/pricing';
import {
  CheckCircle,
  Database,
  FileText,
  Globe,
  Mail,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react';

export default function FlexHubFeatures() {
  const categoryIcons = {
    'Authentication & User Management': Users,
    'Multi-Site Management': Globe,
    'Content Management': FileText,
    'User Invitation System': Mail,
    'Security & Infrastructure': Shield,
    'Modern Development': Zap,
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center">
            <Database className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            FlexHub CMS Platform
          </h2>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Our proprietary CMS platform that powers many of our client websites.
          Built for agencies and organizations managing multiple sites with
          advanced user management and content creation capabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flexHubFeatures.map((category, index) => {
          const IconComponent =
            categoryIcons[category.category as keyof typeof categoryIcons];

          return (
            <Card
              key={index}
              className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-900 dark:text-slate-100">
                    {category.category}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 dark:text-pink-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 p-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-3xl shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Why Choose FlexHub?
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                🚀 Faster Development
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Projects using FlexHub benefit from lower setup costs and faster
                delivery times.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                🔧 Built-in Features
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                User management, content creation, and site management tools
                included out of the box.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                🎯 Scalable Solution
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Perfect for agencies managing multiple client sites with
                different access levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
