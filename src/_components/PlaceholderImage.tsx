import type { LucideIcon } from 'lucide-react';
import {
  Megaphone,
  Monitor,
  Palette,
  Search,
  Share2,
  Terminal,
  Users,
  Video,
} from 'lucide-react';

type PlaceholderImageProps = {
  width?: number;
  height?: number;
  category?: string;
  className?: string;
};

const getIconForCategory = (category?: string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    website: Monitor,
    video: Video,
    'cli-tool': Terminal,
    seo: Search,
    'social-media': Share2,
    advertising: Megaphone,
    design: Palette,
    consulting: Users,
  };
  return icons[category || ''] || Monitor;
};

export default function PlaceholderImage({
  width = 48,
  height = 48,
  category,
  className = '',
}: PlaceholderImageProps) {
  const Icon = getIconForCategory(category);

  return (
    <div
      className={`bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <Icon
        className="w-1/2 h-1/2 text-slate-400 dark:text-slate-500"
        style={{ width: width * 0.5, height: height * 0.5 }}
      />
    </div>
  );
}
