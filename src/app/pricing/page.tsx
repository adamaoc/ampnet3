'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import AddOns from './_components/AddOns';
import EngagementModels from './_components/EngagementModels';
import ExampleScenarios from './_components/ExampleScenarios';
import FlexHubFeatures from './_components/FlexHubFeatures';
import PricingHeader from './_components/PricingHeader';
import ProjectTypes from './_components/ProjectTypes';

function PricingContent() {
  const searchParams = useSearchParams();
  const [clientId, setClientId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const client = searchParams.get('client');
    setClientId(client);
  }, [searchParams]);

  if (!mounted) {
    return (
      <div className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-16 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6"></div>
              <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <PricingHeader clientId={clientId || undefined} />
        <EngagementModels />
        <ProjectTypes />
        <FlexHubFeatures />
        <AddOns />
        <ExampleScenarios />
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-40 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-16 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6"></div>
                <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <PricingContent />
    </Suspense>
  );
}
