import AddOns from './_components/AddOns';
import EngagementModels from './_components/EngagementModels';
import ExampleScenarios from './_components/ExampleScenarios';
import FlexHubFeatures from './_components/FlexHubFeatures';
import PricingHeader from './_components/PricingHeader';
import ProjectTypes from './_components/ProjectTypes';

export default function PricingPage() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <PricingHeader />
        <EngagementModels />
        <ProjectTypes />
        <FlexHubFeatures />
        <AddOns />
        <ExampleScenarios />
      </div>
    </div>
  );
}
