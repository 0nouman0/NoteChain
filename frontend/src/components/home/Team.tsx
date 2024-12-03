import React, { useState } from 'react';
import {
    Linkedin,
    Twitter,
    Mail,
    BookOpen,
    Star,
    Users,
    Trophy
} from 'lucide-react';

const Team = () => {
    const [selectedCreator, setSelectedCreator] = useState(null);

    const creators = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "AI & Machine Learning",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
            specialty: "Deep Learning & Neural Networks",
            experience: "8+ Years Teaching",
            students: "15,000+",
            rating: 4.9,
            availability: "20+ Courses",
            bio: "Leading AI educator specializing in making complex concepts accessible to all learners.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "sarah@notechain.com"
            }
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Web Development",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500",
            specialty: "Full Stack Development",
            experience: "10+ Years Teaching",
            students: "25,000+",
            rating: 4.8,
            availability: "35+ Courses",
            bio: "Full stack developer passionate about teaching modern web technologies.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "michael@notechain.com"
            }
        },
        {
            id: 3,
            name: "Emily Williams",
            role: "Data Science",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500",
            specialty: "Data Analytics & Visualization",
            experience: "6+ Years Teaching",
            students: "12,000+",
            rating: 4.9,
            availability: "15+ Courses",
            bio: "Data scientist making complex analytics accessible through practical examples.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "emily@notechain.com"
            }
        },
        {
            id: 4,
            name: "James Wilson",
            role: "Blockchain Technology",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
            specialty: "Smart Contracts & DeFi",
            experience: "5+ Years Teaching",
            students: "8,000+",
            rating: 4.7,
            availability: "12+ Courses",
            bio: "Blockchain expert focusing on practical applications and smart contract development.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "james@notechain.com"
            }
        }
    ];

    return (
        <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-indigo-50/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-50/50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Learn from
                        <span className="relative mx-4">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                                Top Creators
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"></div>
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Join our community of expert educators sharing valuable knowledge across various domains
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {creators.map((creator, index) => (
                        <div
                            key={creator.id}
                            className="group relative"
                            onMouseEnter={() => setSelectedCreator(creator.id)}
                            onMouseLeave={() => setSelectedCreator(null)}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative bg-white rounded-2xl overflow-hidden">
                                <div className="relative overflow-hidden aspect-[3/4]">
                                    <img
                                        src={creator.image}
                                        alt={creator.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${selectedCreator === creator.id ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="flex items-center">
                                                    <BookOpen className="w-4 h-4 mr-2" />
                                                    <span className="text-sm">{creator.experience}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="w-4 h-4 mr-2" />
                                                    <span className="text-sm">{creator.students}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                                <span className="text-sm">{creator.rating} Rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">{creator.name}</h3>
                                    <p className="text-indigo-600 mb-3">{creator.role}</p>
                                    <p className="text-gray-600 text-sm mb-4">{creator.specialty}</p>
                                    <div className="flex space-x-4">
                                        {Object.entries(creator.social).map(([platform, link]) => (
                                            <a
                                                key={platform}
                                                href={link}
                                                className="text-gray-400 hover:text-indigo-600 transition-colors"
                                            >
                                                {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                                                {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                                                {platform === 'email' && <Mail className="w-5 h-5" />}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                                    <span className="text-sm font-medium text-gray-900">{creator.availability}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
                        Become a Creator
                        <Trophy className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;