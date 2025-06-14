"use client"
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
            alt="Blog hero image"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                Discover Stories That Matter
              </h1>
              <p className="text-white text-xl md:text-2xl mb-8">
                Explore insightful articles, creative ideas, and inspiring stories from around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="text-white px-8 py-3 rounded-lg text-lg font-medium">
                  Start Reading
                </button>
                <button className="text-white px-8 py-3 rounded-lg text-lg font-medium border">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Calendar and Top Posts Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Calendar</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border"
            />
          </div>

          {/* Top Posts Section */}
          <div className="rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Top Posts</h2>
            <div className="space-y-6">
              {/* Post 1 */}
              <div className="flex gap-4">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f"
                    alt="Post thumbnail"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">The Future of Web Development</h3>
                  <p className="text-sm text-gray-600 mb-2">Exploring the latest trends and technologies...</p>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
              </div>

              {/* Post 2 */}
              <div className="flex gap-4">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                    alt="Post thumbnail"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Writing Better Code</h3>
                  <p className="text-sm text-gray-600 mb-2">Tips and tricks for cleaner, more efficient code...</p>
                  <span className="text-sm text-gray-500">8 min read</span>
                </div>
              </div>

              {/* Post 3 */}
              <div className="flex gap-4">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                    alt="Post thumbnail"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI in Modern Development</h3>
                  <p className="text-sm text-gray-600 mb-2">How artificial intelligence is shaping the future...</p>
                  <span className="text-sm text-gray-500">6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Technology"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Technology</h3>
              </div>
            </div>

            {/* Category 2 */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
                alt="Lifestyle"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Lifestyle</h3>
              </div>
            </div>

            {/* Category 3 */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                alt="Travel"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Travel</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">Get the latest articles and news delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              />
              <button className="px-6 py-2 rounded-lg font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Trending Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Web Development', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity'].map((topic) => (
              <div key={topic} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-black font-semibold text-lg mb-2">{topic}</h3>
                <p className="text-sm text-gray-600">Latest articles and insights about {topic.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
