'use client';

import { Button } from '@/components/ui/button';
import { Heart, Mail, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Adam Moore',
      role: 'Creative Director',
      bio: 'Visionary storyteller with a passion for digital experiences.',
      image: 'https://autoink.us/img/team/adam.m.jpg',
    },
    {
      id: 2,
      name: 'Crisia Merino',
      role: 'Operations Director',
      bio: 'Strategic leader orchestrating seamless workflows and empowering teams to deliver exceptional results.',
      image: 'https://autoink.us/img/team/crisia.m.jpg',
    },
    {
      id: 3,
      name: 'Denilson Sibrian',
      role: 'Video Production / Photography',
      bio: 'Master of visual storytelling and cinematic magic.',
      image: 'https://autoink.us/img/team/denilson.s.jpg',
    },
    {
      id: 4,
      name: 'Peighton Moore',
      role: 'Brand Strategist / Marketing',
      bio: 'Strategic visionary crafting brand narratives that resonate with audiences.',
      image:
        'https://media.licdn.com/dms/image/v2/D5635AQE_wgCoAiKpnQ/profile-framedphoto-shrink_800_800/B56ZcSo_QiHUAk-/0/1748364424590?e=1752012000&v=beta&t=Q1Sj8qU5OlkmqbDFmB5ETL8t1JBR13AwdYLHwrXPfE8', // No image available
    },
    {
      id: 5,
      name: 'Robert Sibrian',
      role: 'Photographer',
      bio: 'Capturing moments that tell stories.',
      image: 'https://ampnet.sfo2.cdn.digitaloceanspaces.com/Fam/IMG_4958.JPG',
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion-Driven',
      description:
        'Every project is infused with genuine passion and creativity.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge solutions.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative',
      description: 'Your vision combined with our expertise creates magic.',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 bg-clip-text text-transparent">
              About
            </span>
            <br />
            ampnet (media)
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a collective of digital dreamers, code poets, and visual
            storytellers. <br />
            Born from the intersection of creativity and technology, we believe
            in crafting experiences that don&apos;t just function—they flow,
            inspire, and leave lasting impressions.
          </p>
        </div>

        {/* Story Section */}
        <div
          id="our-story"
          className="max-w-4xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl mb-16"
        >
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <p className="mb-6">
                  Every project is a canvas, every line of code a brushstroke,
                  every frame a moment of magic waiting to unfold. We don&apos;t
                  just build websites or create videos—we craft digital
                  experiences that resonate with hearts and minds.
                </p>
                <p>
                  Founded on the belief that technology and creativity are not
                  opposites but dance partners, ampnet (media) emerged to bridge
                  the gap between what is and what could be.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  Our approach is simple: listen deeply, think boldly, and
                  execute flawlessly. Whether it&apos;s a startup&apos;s first
                  website, a brand&apos;s video campaign, or a company&apos;s
                  digital transformation, we bring the same level of passion and
                  precision.
                </p>
                <p>
                  We believe that great work comes from great relationships, and
                  every client becomes part of our extended creative family.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div id="our-values" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div id="our-team" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div
                key={member.id}
                className="text-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {member.image && !member.image.includes('/api/placeholder') ? (
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                  {member.name}
                </h3>
                <p className="text-teal-600 dark:text-pink-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s turn your vision into reality. Every great project starts
            with a conversation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 hover:from-teal-700 hover:to-orange-700 dark:hover:from-pink-700 dark:hover:to-purple-700 text-white rounded-xl px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
