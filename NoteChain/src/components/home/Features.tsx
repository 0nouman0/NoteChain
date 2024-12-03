import React from 'react';
import {
    BookOpen,
    Shield,
    Coins,
    Lock,
    FileText,
    Award
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Create & Share",
            description: "Create and publish educational content securely on the blockchain",
            color: "from-indigo-600 to-indigo-400"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Decentralized Storage",
            description: "Store your content on IPFS for permanent, tamper-proof access",
            color: "from-purple-600 to-purple-400"
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Content Protection",
            description: "Advanced protection against unauthorized copying and sharing",
            color: "from-blue-600 to-blue-400"
        },
        {
            icon: <Coins className="w-8 h-8" />,
            title: "Token Rewards",
            description: "Earn tokens based on content engagement and quality",
            color: "from-teal-600 to-teal-400"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "NFT Integration",
            description: "Mint your notes as unique NFTs with verifiable ownership",
            color: "from-pink-600 to-pink-400"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Quality Content",
            description: "Access high-quality educational materials across domains",
            color: "from-amber-600 to-amber-400"
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-50 mb-4">
                        <span className="text-indigo-600 text-sm font-semibold">Platform Features</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                        Everything You Need to Create & Earn
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover the powerful features that make NoteChain the perfect platform for creating and monetizing educational content
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                            <div className="absolute inset-[1px] rounded-2xl bg-white"></div>
                            <div className="relative">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="group relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <button className="relative flex items-center justify-between bg-white rounded-xl px-8 py-3 transition-transform duration-300 transform hover:-translate-y-1">
                            <span className="text-gray-900 font-semibold">Start Creating</span>
                            <svg className="w-5 h-5 ml-2 text-purple-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;