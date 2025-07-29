import React from 'react';
import { Play, ArrowRight, Zap, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2 mb-8">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">AI-Powered Learning Revolution</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Math Learning
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Reimagined
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          Enter Mathverse - where AR/VR technology meets AI-powered personalized learning. Make mathematics 
          interactive, engaging, and fun through immersive gamified experiences.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center space-x-2 text-white/90">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">98% Engagement Rate</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="font-semibold">4.9/5 Student Rating</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="font-semibold">10,000+ Active Learners</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Platform Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <p className="text-white/80 font-medium">Interactive Demo Coming Soon</p>
                <p className="text-white/60 text-sm mt-2">Experience AR/VR Math Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;