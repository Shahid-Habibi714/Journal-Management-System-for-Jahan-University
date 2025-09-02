"use client";

import React, { useEffect, useRef } from "react";

function Page() {
  // Animation on scroll implementation would go here
  // For a real implementation, you might want to use a library like Framer Motion

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section with animation */}
        <section className="max-w-4xl mx-auto text-center mb-20 mt-10">
          <div className="relative inline-block">
            <div className="absolute -inset-3 bg-blue-100 rounded-lg blur opacity-30 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Jahab Journal</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed">
            Discover the story behind our passion for authentic storytelling and 
            meaningful content creation.
          </p>
          <div className="mt-12 animate-bounce">
            <svg className="w-8 h-8 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-5xl mx-auto mb-28 transform transition-all duration-700 hover:scale-[1.01]">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-tr-full -z-10"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </span>
              Our Mission
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-semibold text-blue-600">Jahab Journal</span>, we believe in the power of words to inspire, educate, 
                and connect people across the globe. Our mission is to create a platform 
                where diverse voices can share their stories, insights, and perspectives 
                with integrity and authenticity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to delivering high-quality content that matters, 
                fostering a community of thoughtful readers and writers, and 
                promoting meaningful conversations that drive positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-5xl mx-auto mb-28">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We prioritize genuine stories and honest perspectives over sensationalism.",
                icon: "📝",
                color: "bg-amber-100 text-amber-700"
              },
              {
                title: "Quality",
                description: "Every piece of content undergoes rigorous review to maintain excellence.",
                icon: "⭐",
                color: "bg-blue-100 text-blue-700"
              },
              {
                title: "Community",
                description: "We build bridges between writers and readers, fostering meaningful connections.",
                icon: "🤝",
                color: "bg-purple-100 text-purple-700"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:-translate-y-2 border border-white/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-5xl mx-auto mb-28">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Jahab Journal was founded in 2020 by a group of passionate writers 
                      and journalists who saw the need for a platform that values substance 
                      over speed, and depth over virality.
                    </p>
                    <p className="text-gray-700">
                      What started as a small blog has grown into a respected publication 
                      with contributors from around the world. Our name "Jahab" draws 
                      inspiration from the Arabic word meaning "to matter" or "to be 
                      significant" - reflecting our commitment to content that truly matters.
                    </p>
                    <p className="text-gray-700">
                      Today, we continue to evolve while staying true to our core values 
                      of authenticity, quality, and community. We're proud to have built 
                      a space where both established and emerging voices can thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full border border-white/20 flex flex-col justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-6">📈</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Growth</h3>
                    <div className="grid grid-cols-3 gap-4 text-white">
                      <div className="text-center">
                        <div className="text-3xl font-bold">50+</div>
                        <div className="text-sm">Writers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-sm">Articles</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">10K+</div>
                        <div className="text-sm">Readers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/10 bg-[size:40px_40px] -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of our growing community of readers and writers who believe 
              in the power of meaningful storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Subscribe Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                Contribute
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 pt-10 border-t border-gray-200/50">
          <p>© {new Date().getFullYear()} Jahab Journal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Page;