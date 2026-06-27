'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Check, Shield, Zap, Globe, BarChart3, TrendingUp,
  Users, Building2, Factory, Store, GraduationCap, Heart, Truck,
  Wheat, Wrench, Landmark, Brain, Cloud, Lock, Smartphone, Download,
  ChevronRight, Menu, X, Star, Play
} from 'lucide-react';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const modules = [
    { name: 'Inventory', desc: 'Real-time stock tracking, batch expiry, multi-warehouse transfers, barcode scanning.' },
    { name: 'POS', desc: 'Retail, restaurant, pharmacy POS. M-Pesa, card, cash. Offline mode.' },
    { name: 'Accounting', desc: 'Double-entry ledger, invoicing, expenses, bank reconciliation, financial statements.' },
    { name: 'Payroll', desc: 'Employee payroll, PAYE, NSSF, NHIF, payslips, direct deposits.' },
    { name: 'CRM', desc: 'Customer database, leads, pipelines, loyalty programs, marketing campaigns.' },
    { name: 'HRM', desc: 'Employee records, attendance, leave management, performance reviews.' },
    { name: 'Procurement', desc: 'Supplier management, purchase orders, goods received notes, vendor payments.' },
    { name: 'Manufacturing', desc: 'Bill of materials, work orders, production planning, quality control.' },
  ];

  const industries = [
    { name: 'Retail', icon: Store },
    { name: 'Manufacturing', icon: Factory },
    { name: 'Healthcare', icon: Heart },
    { name: 'Education', icon: GraduationCap },
    { name: 'Construction', icon: Wrench },
    { name: 'Agriculture', icon: Wheat },
    { name: 'Logistics', icon: Truck },
    { name: 'Finance', icon: Landmark },
    { name: 'Hospitality', icon: Building2 },
    { name: 'Government', icon: Globe },
  ];

  const features = [
    { icon: Brain, title: 'AI-Powered', desc: 'Intelligent automation across every module' },
    { icon: Cloud, title: 'Cloud Native', desc: 'Access from anywhere, any device, anytime' },
    { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant, encrypted, audited' },
    { icon: Zap, title: 'Real-Time Analytics', desc: 'Live dashboards with actionable insights' },
    { icon: Smartphone, title: 'Mobile Ready', desc: 'Full functionality on phone and tablet' },
    { icon: Globe, title: 'Multi-Currency', desc: 'Support for 200+ world currencies' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== NAVIGATION ===== */}
      <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-base">W</span>
            </div>
            <span className="text-xl font-bold text-gray-900">WaveCore<span className="text-blue-600">ERP</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#modules" className="hover:text-blue-600 transition">Modules</a>
            <a href="#industries" className="hover:text-blue-600 transition">Industries</a>
            <a href="#features" className="hover:text-blue-600 transition">Why WaveCore</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:inline text-sm font-medium text-gray-600 hover:text-blue-600 transition">Sign in</Link>
            <Link href="/register" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition shadow-sm">Get Started</Link>
            <button className="lg:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="lg:hidden bg-white border-b px-6 py-4 space-y-3">
            <a href="#modules" className="block text-sm font-medium">Modules</a>
            <a href="#industries" className="block text-sm font-medium">Industries</a>
            <a href="#features" className="block text-sm font-medium">Why WaveCore</a>
            <a href="#pricing" className="block text-sm font-medium">Pricing</a>
            <Link href="/login" className="block text-sm font-medium">Sign in</Link>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8">
            <Zap className="h-4 w-4" /> AI-Powered Enterprise Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Run your entire business<br />from one intelligent platform
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            WaveCore ERP combines inventory, POS, accounting, CRM, HR, payroll, procurement, 
            and manufacturing into a single AI-powered system. KES 1,000/month.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition">
              <Play className="h-5 w-5" /> Watch Demo
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> 14-day free trial</span>
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> No credit card</span>
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> M-Pesa Till 4760783</span>
          </div>
        </div>
      </section>

      {/* ===== MODULES ===== */}
      <section id="modules" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Complete ERP Modules</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Every tool you need to run your business — included in one subscription.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map(m => (
            <div key={m.name} className="group rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-default">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{m.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">+10 more modules including Assets, Fleet, Projects, Compliance, Tax, Reports, and AI Copilot</p>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Built for Every Industry</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From retail shops to manufacturing plants, WaveCore adapts to your business.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industries.map(ind => (
              <div key={ind.name} className="bg-white rounded-xl border border-gray-200 p-5 text-center hover:shadow-md transition-all cursor-default">
                <ind.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY WAVECORE ===== */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why businesses choose WaveCore</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Enterprise-grade features at a fraction of the cost.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <f.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Simple, transparent pricing</h2>
          <p className="text-gray-500 mb-12">One plan. All modules included. No hidden costs.</p>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 p-10">
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">W</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">WaveCore ERP</h3>
            <p className="text-gray-500 text-sm mt-1">Complete business platform</p>
            <div className="my-6">
              <span className="text-6xl font-bold text-gray-900">KES 1,000</span>
              <span className="text-gray-400 text-lg">/month</span>
            </div>
            <ul className="space-y-2.5 text-left mb-8">
              {[
                'All ERP modules included',
                'Unlimited users',
                'AI Copilot',
                'Mobile apps',
                'M-Pesa payments',
                'Email & chat support',
                'Automatic updates',
                '14-day free trial',
              ].map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link href="/register" className="block w-full rounded-lg bg-blue-600 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition shadow-sm">
              Start Free Trial
            </Link>
            <p className="mt-4 text-xs text-gray-400">Pay via M-Pesa Till <strong className="text-gray-600">4760783</strong></p>
          </div>
        </div>
      </section>

      {/* ===== SECURITY ===== */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-10 w-10 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Enterprise-Grade Security</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Your data is protected with bank-level encryption, SOC 2 compliance, and regular security audits.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {['256-bit Encryption', 'SOC 2 Compliant', 'RBAC & MFA', 'Audit Logs', 'Automated Backups', '99.99% Uptime SLA', 'GDPR Ready', 'ISO 27001'].map(s => (
              <div key={s} className="flex items-center gap-2 justify-center text-gray-300">
                <Lock className="h-4 w-4 text-green-400" /> {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to transform your business?</h2>
        <p className="text-blue-100 mb-8 max-w-md mx-auto">Start your 14-day free trial. No credit card required.</p>
        <Link href="/register" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-blue-600 hover:bg-blue-50 transition shadow-lg">
          Get Started Free <ArrowRight className="h-5 w-5" />
        </Link>
        <p className="mt-4 text-sm text-blue-200">KES 1,000/month after trial · M-Pesa Till 4760783</p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="font-bold text-gray-900">WaveCore<span className="text-blue-600">ERP</span></span>
              </div>
              <p className="text-sm text-gray-500">AI-powered ERP for modern businesses. KES 1,000/month.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#modules" className="hover:text-blue-600">Modules</a></li>
                <li><a href="#features" className="hover:text-blue-600">Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-600">API</a></li>
                <li><span className="text-gray-400">support@wavecore.app</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <span>© 2026 WaveCore Technologies. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <span>M-Pesa Till: <strong className="text-gray-600">4760783</strong></span>
              <span>KES 1,000/month</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}