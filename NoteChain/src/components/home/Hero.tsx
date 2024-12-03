import React from 'react';
import { BookOpen, Shield, Coins, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 bg-gradient-to-b from-gray-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -inset-[10px] bg-gradient-to-tr from-indigo-600/30 via-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-bl from-indigo-600/40 via-purple-500/40 to-blue-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative mx-auto px-4 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="text-white max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-200">
                Decentralized Learning Platform
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              Learn, Create,
              <span className="relative mx-4">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  Earn
                </span>
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Join NoteChain to create and monetize your educational content while maintaining complete ownership through blockchain technology.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {[
                { icon: <Shield className="w-5 h-5" />, text: "Decentralized Storage" },
                { icon: <BookOpen className="w-5 h-5" />, text: "Protected Content" },
                { icon: <Coins className="w-5 h-5" />, text: "Token Rewards" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                >
                  {feature.icon}
                  <span className="ml-2">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center justify-between bg-white rounded-xl px-8 py-3 transition-transform duration-300 transform hover:-translate-y-1">
                <span className="text-gray-900 font-semibold mr-2">Get Started</span>
                <ArrowRight className="w-5 h-5 text-purple-600 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;