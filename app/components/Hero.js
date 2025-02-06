"use client"
import Link from 'next/link';
export default function Hero() {
    return (
      <div className="bg-gradient-to-r from-blue-900 via-purple-800 to-black text-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left py-32 px-5 flex-grow container mx-auto">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Private & Secure Web3 Messaging
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl drop-shadow-md">
              Experience true end-to-end encrypted messaging powered by zkFHE & blockchain technology. Communicate with complete privacy and security like never before.
            </p>
            <ul className="mt-6 space-y-3 text-lg text-gray-300">
              <li className="flex items-center space-x-2"><span className="text-blue-400 text-2xl">✓</span> End-to-end encryption with zkFHE</li>
              <li className="flex items-center space-x-2"><span className="text-blue-400 text-2xl">✓</span> Decentralized and tamper-proof</li>
              <li className="flex items-center space-x-2"><span className="text-blue-400 text-2xl">✓</span> Accessible from anywhere securely</li>
            </ul>
            <a href="/chat">
            <button  className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
              Get Started
            </button>
            </a>
          </div>
  
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
  <img 
    src="/images/img1.png"
    alt="A girl using a secure messaging app" 
    className="w-96 md:w-[500px] lg:w-[600px] rounded-lg"
  />
</div>

        </section>
      </div>
    );
}
