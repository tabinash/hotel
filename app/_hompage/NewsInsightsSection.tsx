"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiUser, FiArrowRight, FiClock } from 'react-icons/fi';

const NewsInsightsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const newsInsights = [
    {
      id: 1,
      category: 'Technology',
      title: 'Digital Transformation Trends for Nepali Businesses in 2025',
      excerpt: 'Explore how Nepali businesses are embracing digital transformation with cloud solutions, mobile-first strategies, and AI integration to compete in the global market.',
      image: '/api/placeholder/400/250',
      author: 'Suresh Karki',
      date: 'March 15, 2024',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      category: 'Business',
      title: 'How E-commerce is Revolutionizing Nepal\'s Retail Sector',
      excerpt: 'Discover how online retail platforms are transforming traditional business models in Nepal, creating new opportunities for entrepreneurs and established businesses alike.',
      image: '/api/placeholder/400/250',
      author: 'Anita Sharma',
      date: 'March 12, 2024',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 3,
      category: 'Design',
      title: 'Mobile-First Design: Essential for Nepal\'s Growing Smartphone Market',
      excerpt: 'Learn why mobile-first design principles are crucial for businesses targeting Nepal\'s rapidly expanding smartphone user base and how to implement them effectively.',
      image: '/api/placeholder/400/250',
      author: 'Rajesh Thapa',
      date: 'March 10, 2024',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      category: 'Technology',
      title: 'SEO Strategies That Work for Nepali Businesses Going Global',
      excerpt: 'Essential SEO techniques and strategies that help Nepali businesses improve their online visibility and reach international markets effectively.',
      image: '/api/placeholder/400/250',
      author: 'Priya Maharjan',
      date: 'March 8, 2024',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      category: 'Business',
      title: 'Cloud Solutions: Cost-Effective IT Infrastructure for Growing Companies',
      excerpt: 'A comprehensive guide on how cloud computing is helping Nepali businesses reduce IT costs while improving scalability and operational efficiency.',
      image: '/api/placeholder/400/250',
      author: 'Mohan Basnet',
      date: 'March 5, 2024',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 6,
      category: 'Technology',
      title: 'Building Trust in Digital Payments: Lessons from Nepal\'s Fintech Growth',
      excerpt: 'Explore how Nepal\'s fintech sector is building user trust through secure payment solutions and what businesses can learn from this digital payment revolution.',
      image: '/api/placeholder/400/250',
      author: 'Kiran Bista',
      date: 'March 3, 2024',
      readTime: '5 min read',
      featured: false
    }
  ];

  const categories = ['all', 'Technology', 'Business', 'Design'];

  const filteredNews = activeTab === 'all'
    ? newsInsights
    : newsInsights.filter(item => item.category === activeTab);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-6">
            Insights & Updates from <span className="text-[#f46036]">Nepal's Digital Landscape</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in technology, business, and digital innovation from our expert team and Nepal's growing tech ecosystem.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-md">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === category
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  style={activeTab === category ? { backgroundColor: '#f46036' } : {}}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 ${item.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: '#f46036' }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-normal text-black mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FiUser className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiCalendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiClock className="h-4 w-4" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${item.id}`}
                  className="inline-flex items-center font-semibold text-black transition-colors group/link"
                  style={{ color: '#f46036' }}
                >
                  Read More
                  <FiArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-white px-8 py-2 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg group"
            style={{ backgroundColor: '#f46036' }}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#e55530'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#f46036'}
          >
            View All
            <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>


      </div>
    </section>
  );
};

export default NewsInsightsSection;