import Link from 'next/link';
import { Shield, Zap, Globe, BarChart3, TrendingUp, ArrowRight, Check, Star, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs text-center py-2 px-4">
        🚀 WaveCore ERP v2.0 is live — One plan, all modules, KES 1,000/month. <a href="/register" className="underline font-medium ml-2">Get Started →</a>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <span className="text-lg font-bold tracking-tight">WaveCore<span className="text-gray-400 font-normal">ERP</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {['Product','Industries','AI','Pricing','Docs'].map(item => (
              <a key={item} href={'#' + item.toLowerCase()} className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Log in</Link>
            <Link href="/register" className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition shadow-sm">Start Free Trial</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#e0e7ff_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" /></span>
              Live — Processing KES 50B+ in transactions
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08]">
              The AI platform<br />that runs your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">entire business</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-xl leading-relaxed">
              Inventory, accounting, POS, HR, CRM, procurement, manufacturing — 
              all in one platform. Powered by AI. KES 1,000/month.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/register" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 text-base font-semibold text-white hover:bg-gray-800 transition shadow-lg shadow-gray-200">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-7 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition">
                Watch Demo <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> No credit card required</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> 14-day free trial</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Cancel anytime</span>
            </div>
          </div>
        </div>
        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto px-6 -mt-12 pb-20">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/50 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /></div>
              <span className="text-xs text-gray-400 ml-2">WaveCore ERP — Live Dashboard</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Revenue Today', value: 'KES 1,247,500', change: '+12.5%', up: true },
                  { label: 'Active Orders', value: '342', change: '+8%', up: true },
                  { label: 'Inventory Items', value: '8,450', change: '98% healthy', up: true },
                  { label: 'AI Insights', value: '24', change: '5 critical', up: false },
                ].map(card => (
                  <div key={card.label} className="rounded-xl border border-gray-100 p-4">
                    <p className="text-xs text-gray-400">{card.label}</p>
                    <p className="text-xl font-bold mt-1">{card.value}</p>
                    <span className={`text-xs ${card.up ? 'text-green-600' : 'text-amber-600'}`}>{card.change}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-48 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <BarChart3 className="h-12 w-12 text-gray-300" />
                </div>
                <div className="h-48 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-y border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider font-medium mb-8">Trusted by businesses across Africa</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-50">
            {['Safaricom','KCB','Equity','Kenya Airways','Bamburi','Bidco'].map(n => (
              <div key={n} className="text-center text-sm font-bold text-gray-400">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to run your business</h2>
            <p className="text-gray-500 max-w-xl mx-auto">18+ integrated modules. One subscription. No per-module pricing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: 'Inventory & Warehousing', desc: 'Real-time stock tracking, batch expiry, multi-warehouse transfers, barcode scanning, stock counts.' },
              { title: 'Point of Sale (POS)', desc: 'Retail, restaurant, pharmacy POS. M-Pesa, card, cash. Offline mode. Receipt printing.' },
              { title: 'CRM & Sales', desc: 'Customer database, lead pipeline, loyalty programs, marketing automation, customer portal.' },
              { title: 'Accounting & Finance', desc: 'Double-entry ledger, invoicing, expenses, bank reconciliation, financial statements, tax.' },
              { title: 'HRM & Payroll', desc: 'Employee records, attendance, leave management, PAYE, NSSF, NHIF, payslip generation.' },
              { title: 'Procurement', desc: 'Supplier management, purchase orders, goods received notes, vendor payments.' },
              { title: 'Manufacturing', desc: 'Bill of materials, work orders, production planning, quality control.' },
              { title: 'AI Copilot', desc: 'Business assistant, sales forecasting, fraud detection, cash flow prediction, smart insights.' },
              { title: 'Reports & Analytics', desc: 'Custom dashboards, KPI tracking, PDF/Excel exports, real-time business intelligence.' },
            ].map(f => (
              <div key={f.title} className="group rounded-xl p-6 hover:bg-gray-50 transition-colors cursor-default">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Plan Pricing */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">One plan. One price.</h2>
          <p className="text-gray-500 mb-12">Every module included. No hidden costs.</p>
          <div className="rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-100 p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">WaveCore ERP</h3>
            <p className="text-gray-500 text-sm mb-6">Complete business platform</p>
            <div className="mb-6">
              <span className="text-6xl font-bold text-gray-900">KES 1,000</span>
              <span className="text-gray-400 text-lg">/month</span>
            </div>
            <ul className="space-y-3 text-left mb-8">
              {[
                'All 18+ ERP modules included',
                'Unlimited users',
                'AI Copilot',
                'Mobile apps',
                'M-Pesa payments',
                'Email & chat support',
                'Automatic updates',
                '14-day free trial',
              ].map(f => <li key={f} className="flex items-center gap-3 text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 flex-shrink-0" />{f}</li>)}
            </ul>
            <Link href="/register" className="block w-full rounded-xl bg-gray-900 py-3.5 text-base font-semibold text-white hover:bg-gray-800 transition">Start 14-Day Free Trial</Link>
            <p className="mt-4 text-xs text-gray-400">Pay via M-Pesa Till <strong className="text-gray-600">4760783</strong> after trial</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© 2026 WaveCore Technologies</span>
          <div className="flex items-center gap-6">
            <span>M-Pesa Till: <strong className="text-gray-600">4760783</strong></span>
            <span>support@wavecore.app</span>
          </div>
        </div>
      </footer>
    </div>
  );
}