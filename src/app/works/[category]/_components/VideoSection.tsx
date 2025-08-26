import { Play } from 'lucide-react';

interface VideoSectionProps {
  videoUrl: string;
}

const VideoSection = ({ videoUrl }: VideoSectionProps) => {
  // Extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return null;
  };

  const videoId = getYouTubeVideoId(videoUrl);

  if (!videoId) {
    return null;
  }

  return (
    <div className="px-6 mb-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-orange-500 dark:from-pink-500 dark:to-purple-500 rounded-2xl mb-4 shadow-lg">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Watch the Video
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Experience this project in action
            </p>
          </div>

          {/* Video Embed */}
          <div className="relative aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Project Video"
              className="w-full h-full rounded-2xl shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
