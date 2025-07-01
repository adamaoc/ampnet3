import { Play, Code, Megaphone, Share2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Play,
      title: 'Web Video',
      description: 'Cinematic storytelling that captivates and converts',
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fluid, responsive experiences built for the future',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: Megaphone,
      title: 'Web Advertising',
      description: 'Strategic campaigns that resonate and reach',
      gradient: 'from-teal-500 to-orange-500',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Authentic connections in the digital landscape',
      gradient: 'from-cyan-400 to-teal-500',
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Four pillars of digital excellence, each crafted with passion and
            precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 hover:border-teal-200 dark:hover:border-teal-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-center font-bold mb-3 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-slate-600 text-center dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
