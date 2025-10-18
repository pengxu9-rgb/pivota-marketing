'use client';

import { Bot, Store, ArrowRight, Zap, Shield, Globe, Code, BarChart, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pivota
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            AI Commerce.{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Unified.
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Scalable.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Connect AI agents to merchants through our unified payment infrastructure.
            One API. Infinite possibilities.
          </p>
        </div>

        {/* Two Entry Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* For AI Agents */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 bg-white p-8 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">For AI Agents</h2>
                  <p className="text-sm text-gray-500">Developers & Integrators</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Integrate payment infrastructure in minutes with our unified API. Build AI shopping assistants, chatbots, and automated purchasing systems.
              </p>
              <button
                onClick={() => window.location.href = 'https://agents.pivota.cc/signup'}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center gap-2 group-hover:scale-105"
              >
                Start Building
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.location.href = 'https://agents.pivota.cc/login'}
                className="w-full mt-3 text-purple-600 hover:text-purple-800 text-sm font-medium"
              >
                Already have an account? Sign in →
              </button>
            </div>
          </div>

          {/* For Merchants */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 bg-white p-8 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Store className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">For Merchants</h2>
                  <p className="text-sm text-gray-500">Brands & Retailers</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Open your store to the AI economy. Reach new customers through AI agents and automated purchasing systems. Grow your revenue effortlessly.
              </p>
              <button
                onClick={() => window.location.href = 'https://merchants.pivota.cc/signup'}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 group-hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.location.href = 'https://merchants.pivota.cc/login'}
                className="w-full mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Already onboarded? Sign in →
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {[
            {
              icon: Code,
              title: 'Unified API',
              description: 'One API to access hundreds of merchants. Simple integration, powerful features.'
            },
            {
              icon: Zap,
              title: 'Real-time Processing',
              description: 'Instant order processing, live inventory sync, and payment confirmation.'
            },
            {
              icon: Shield,
              title: 'Enterprise Security',
              description: 'Bank-level encryption, PCI-DSS compliant, fraud detection included.'
            },
            {
              icon: Globe,
              title: 'Multi-Currency',
              description: 'Support for 100+ currencies with automatic conversion and local payment methods.'
            },
            {
              icon: BarChart,
              title: 'Analytics Dashboard',
              description: 'Real-time insights for both agents and merchants. Track every transaction.'
            },
            {
              icon: CheckCircle,
              title: 'Auto Onboarding',
              description: 'AI-powered merchant verification. Get approved in minutes, not days.'
            },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-12 max-w-4xl mx-auto border border-gray-200 shadow-lg mb-20">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-gray-600">Currencies Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                &lt;100ms
              </div>
              <div className="text-gray-600">API Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-xl font-bold">Pivota</span>
              </div>
              <p className="text-gray-400 text-sm">
                Unified payment infrastructure for the AI economy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Agents</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://agents.pivota.cc/signup" className="hover:text-white">Sign Up</a></li>
                <li><a href="https://agents.pivota.cc/login" className="hover:text-white">Login</a></li>
                <li><a href={`${process.env.NEXT_PUBLIC_API_URL}/docs`} target="_blank" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Merchants</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://merchants.pivota.cc/signup" className="hover:text-white">Sign Up</a></li>
                <li><a href="https://merchants.pivota.cc/login" className="hover:text-white">Login</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://employee.pivota.cc" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2025 Pivota. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
