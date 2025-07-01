'use client';

import { Clock, ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories, getFeaturedPost, getRegularPosts } from '@/data/blog';

export default function MagicPage() {
  const featuredPost = getFeaturedPost();
  const regularPosts = getRegularPosts();

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 bg-clip-text text-transparent">
              Magic
            </span>
            <br />
            Insights & Stories
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Where creativity meets technology, and ideas transform into digital
            magic. Discover insights, stories, and inspiration from the world of
            digital innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={
                category === 'All'
                  ? 'bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 text-white border-0'
                  : 'border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full min-h-[300px]">
                  <div className="w-full h-full bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 flex items-center justify-center">
                    <div className="text-white text-lg font-medium">
                      Featured Image
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-slate-900/90 text-teal-600 dark:text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="bg-teal-100 dark:bg-pink-900/30 text-teal-700 dark:text-pink-300 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString(
                        'en-US',
                        {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        }
                      )}
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          {featuredPost.author}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                          <Clock className="h-3 w-3" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 text-white hover:shadow-lg transition-all duration-200">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {regularPosts.map(post => (
            <article
              key={post.id}
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="relative h-48 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 flex items-center justify-center">
                <div className="text-white font-medium">Blog Image</div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 dark:bg-slate-900/90 text-teal-600 dark:text-pink-400 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                  <span>•</span>
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 leading-tight group-hover:text-teal-600 dark:group-hover:text-pink-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {post.author}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-teal-600 dark:text-pink-400 hover:bg-teal-50 dark:hover:bg-pink-900/20 p-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 px-8"
          >
            Load More Posts
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Stay In The Loop
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights and stories delivered straight to your
            inbox. No spam, just pure digital magic.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-pink-500"
            />
            <Button className="bg-gradient-to-r from-teal-600 to-orange-600 dark:from-pink-600 dark:to-purple-600 text-white px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
