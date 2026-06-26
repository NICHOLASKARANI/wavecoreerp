import Link from 'next/link';
import { Shield, Zap, Globe, BarChart3, TrendingUp, ArrowRight, Check, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#030712]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 shadow-lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <span className="text-lg font-bold">WAVECORE<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ERP</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-400 hover:text-white transition">Sign in</Link>
            <Link href="/register" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition">Get Started</Link>
          </div>
        </div>
      </header>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" style={{animationDelay:'2s'}} />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-sm mb-8">
            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span className="text-gray-400">The #1 AI-Powered ERP in Africa</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl mx-auto">
            <span className="text-white">Enterprise</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Intelligence</span>
            <br />
            <span className="text-white">for Modern</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">Businesses</span>
          </h1>
          <p className="mt-8 text-lg text-gray-500 max-w-2xl mx-auto">AI-powered ERP that automates inventory, accounting, CRM, HRM, procurement, and analytics.</p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/register" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-2xl hover:scale-[1.02] transition-all">Start Free Trial <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[{v:'10,000+',l:'Active Companies'},{v:'KES 50B+',l:'Transactions'},{v:'40+',l:'Countries'},{v:'99.99%',l:'Uptime SLA'}].map(s=><div key={s.l} className="text-center"><p className="text-3xl font-bold">{s.v}</p><p className="text-xs text-gray-500 mt-1">{s.l}</p></div>)}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Everything your business needs</h2>
          <p className="text-gray-500 mb-16">One platform. Every department. Powered by AI.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:'📦',title:'Inventory',desc:'Real-time stock tracking, batch expiry, multi-warehouse.'},
              {icon:'🏪',title:'POS System',desc:'Retail, Restaurant POS with M-Pesa, Cash, Card.'},
              {icon:'👥',title:'CRM',desc:'Leads, pipelines, loyalty, customer portal.'},
              {icon:'📊',title:'Accounting',desc:'Double-entry, invoices, expenses, tax compliance.'},
              {icon:'👷',title:'HRM & Payroll',desc:'Employees, attendance, leave, PAYE, NSSF, NHIF.'},
              {icon:'🤖',title:'AI Copilot',desc:'Sales forecasting, fraud detection, insights.'},
            ].map(f=><div key={f.title} className="rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] p-8 transition-all"><div className="text-3xl mb-4">{f.icon}</div><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-gray-400">{f.desc}</p></div>)}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 border-t border-white/[0.04] text-center">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-500 mb-12">KES 1,000/month · M-Pesa Till: <span className="text-white font-bold">4760783</span></p>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[{n:'Starter',p:'1,000',u:'5 Users'},{n:'Professional',p:'3,000',u:'20 Users',pop:true},{n:'Business',p:'7,500',u:'50 Users'},{n:'Enterprise',p:'20,000',u:'Unlimited'}].map(x=><div key={x.n} className={`rounded-2xl border p-8 text-left relative ${x.pop?'border-purple-500/50 bg-purple-500/[0.03]':'border-white/[0.04] bg-white/[0.01]'}`}>{x.pop&&<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 text-xs font-bold">Popular</div>}<h3 className="text-lg font-semibold">{x.n}</h3><p className="mt-3"><span className="text-4xl font-bold">KES {x.p}</span><span className="text-gray-500 text-sm">/mo</span></p><p className="text-xs text-gray-500">{x.u}</p><Link href="/register" className={`mt-6 block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition ${x.pop?'bg-gradient-to-r from-purple-600 to-blue-600':'bg-white/[0.05] hover:bg-white/[0.08]'}`}>Get Started</Link></div>)}
        </div>
      </section>
      <footer className="border-t border-white/[0.04] py-12 text-center text-sm text-gray-600">
        © 2026 WAVECORE Technologies · M-Pesa Till: 4760783 · KES 1,000/month
      </footer>
    </div>
  );
}