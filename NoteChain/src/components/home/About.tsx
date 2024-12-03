import React from 'react';
import { Shield, BookOpen, Coins, LockKeyhole } from 'lucide-react';

const About = () => {
    const benefits = [
        "Decentralized Content Storage",
        "Blockchain-Secured Notes",
        "Token-Based Rewards",
        "Content Protection System"
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-indigo-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-6 blur-lg opacity-20"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600&h=400"
                                alt="Collaborative Learning"
                                className="relative rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-indigo-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Protected by</p>
                                        <p className="font-bold text-gray-900">Blockchain</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <span className="text-indigo-600 font-semibold mb-2 block">About NoteChain</span>
                        <h2 className="text-4xl font-bold mb-6">
                            Revolutionizing Educational
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                                Content Creation
                            </span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            NoteChain is a groundbreaking platform that empowers educators and content creators to securely publish 
                            and monetize their educational content. Through blockchain technology, we ensure your intellectual 
                            property remains protected while enabling you to reach a global audience and earn rewards for your expertise.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                                    {index === 0 && <Shield className="w-5 h-5 text-indigo-600" />}
                                    {index === 1 && <LockKeyhole className="w-5 h-5 text-indigo-600" />}
                                    {index === 2 && <Coins className="w-5 h-5 text-indigo-600" />}
                                    {index === 3 && <BookOpen className="w-5 h-5 text-indigo-600" />}
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="group relative inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <button className="relative flex items-center justify-between bg-white rounded-xl px-8 py-3 transition-transform duration-300 transform hover:-translate-y-1">
                                <span className="text-gray-900 font-semibold">Get Started</span>
                                <svg className="w-5 h-5 ml-2 text-purple-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;