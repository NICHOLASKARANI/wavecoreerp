'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown, Menu, X, Star, Shield, Zap, Globe, BarChart3, TrendingUp, Users, Building2, Factory, Store, GraduationCap, Heart, Truck, Wheat, Wrench, Landmark, Phone } from 'lucide-react';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    { name: 'Inventory', desc: 'Real-time stock, batches, expiry, multi-warehouse' },
    { name: 'POS', desc: 'Retail, restaurant, pharmacy. M-Pesa, card, cash.' },
    { name: 'Accounting', desc: 'Double-entry, invoices, expenses, tax, reports' },
    { name: 'Payroll', desc: 'PAYE, NSSF, NHIF, payslips, direct deposits' },
    { name: 'CRM', desc: 'Customers, leads, pipelines, loyalty, campaigns' },
    { name: 'HR', desc: 'Employees, attendance, leave, performance reviews' },
    { name: 'Procurement', desc: 'Suppliers, purchase orders, GRN, payments' },
    { name: 'Manufacturing', desc: 'BOM, work orders, production, quality control' },
    { name: 'Projects', desc: 'Planning, milestones, tasks, timesheets, budgets' },
    { name: 'Assets', desc: 'Fixed assets, depreciation, maintenance schedules' },
    { name: 'Fleet', desc: 'Vehicle tracking, maintenance, fuel, expenses' },
    { name: 'Warehouse', desc: 'Multi-location, transfers, picking, packing' },
  ];

  const industries = [
    { icon: Store, name: 'Retail' }, { icon: Factory, name: 'Manufacturing' },
    { icon: Truck, name: 'Wholesale' }, { icon: Heart, name: 'Healthcare' },
    { icon: GraduationCap, name: 'Education' }, { icon: Building2, name: 'Construction' },
    { icon: Wheat, name: 'Agriculture' }, { icon: Landmark, name: 'Government' },
    { icon: Truck, name: 'Logistics' }, { icon: Store, name: 'Hospitality' },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* NAV */}
      <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-md bg-gray-900 flex items-center justify-center"><span className="text-white font-bold text-sm">W</span></div>
            <span className="text-lg font-bold text-gray-900">WaveCore<span className="text-gray-400 font-normal">ERP</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {['Product','Industries','AI','Pricing','Docs'].map(item => (
              <a key={item} href={'#'+item.toLowerCase()} className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:inline text-sm font-medium text-gray-600 hover:text-gray-900">Sign in</Link>
            <Link href="/register" className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition">Start Free Trial</Link>
            <button className="lg:hidden p-2" onClick={()=>setMobileMenu(!mobileMenu)}>{mobileMenu ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/></span>
            Live — Processing KES 50B+ in transactions
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08]">
            The complete ERP<br />for your business
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Inventory, POS, accounting, CRM, HR, payroll, procurement, manufacturing — 
            all in one platform. KES 1,000/month. Every module included.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/register" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 transition shadow-sm">
              Start Free Trial <ArrowRight className="h-4 w-4"/>
            </Link>
            <span className="text-sm text-gray-500">No credit card required · M-Pesa Till 4760783</span>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">Everything your business needs</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {modules.map(m => (
            <div key={m.name} className="rounded-lg border border-gray-200 p-5 hover:border-gray-300 transition">
              <h3 className="font-semibold text-gray-900 mb-1">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Built for every industry</h2>
          <p className="text-gray-500 mb-10">From retail shops to manufacturing plants, WaveCore adapts to your business.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map(ind => (
              <div key={ind.name} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-sm transition text-center">
                <ind.icon className="h-8 w-8 text-blue-600 mx-auto mb-2"/>
                <p className="text-sm font-medium">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Powered by AI</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">AI Copilot helps you forecast sales, detect fraud, predict inventory, and generate reports — automatically.</p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Sales Forecasting', desc: 'Predict revenue with 97% accuracy' },
              { title: 'Fraud Detection', desc: 'Real-time anomaly alerts' },
              { title: 'Inventory Prediction', desc: 'Auto-reorder suggestions' },
              { title: 'Smart Reports', desc: 'Generate reports in seconds' },
            ].map(f => (
              <div key={f.title} className="bg-white/10 rounded-lg p-5 text-left">
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-500 mb-10">One plan. All modules included.</p>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
            <h3 className="text-lg font-bold mb-2">WaveCore ERP</h3>
            <p className="text-sm text-gray-500 mb-6">Complete business platform</p>
            <div className="mb-6"><span className="text-5xl font-bold">KES 1,000</span><span className="text-gray-400">/month</span></div>
            <ul className="space-y-2 text-left mb-8">
              {['All modules included','Unlimited users','AI Copilot','M-Pesa payments','Mobile apps','Free updates','14-day trial'].map(f=>(
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 flex-shrink-0"/>{f}</li>
              ))}
            </ul>
            <Link href="/register" className="block w-full rounded-md bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition">Start Free Trial</Link>
            <p className="mt-3 text-xs text-gray-400">Pay via M-Pesa Till 4760783</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded bg-white/10 flex items-center justify-center"><span className="text-white font-bold text-sm">W</span></div>
                <span className="font-bold">WaveCore<span className="text-gray-400 font-normal">ERP</span></span>
              </div>
              <p className="text-sm text-gray-400">The complete ERP for your business. KES 1,000/month.</p>
            </div>
            <div><h4 className="font-semibold mb-3">Product</h4><ul className="space-y-2 text-sm text-gray-400">{['Features','Industries','AI Copilot','Pricing','Updates'].map(l=><li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}</ul></div>
            <div><h4 className="font-semibold mb-3">Company</h4><ul className="space-y-2 text-sm text-gray-400">{['About','Careers','Contact','Privacy','Terms'].map(l=><li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}</ul></div>
            <div><h4 className="font-semibold mb-3">Support</h4><ul className="space-y-2 text-sm text-gray-400">{['Documentation','API','Help Center','Community','Status'].map(l=><li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}</ul></div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <span>© 2026 WaveCore Technologies. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <span>M-Pesa Till: 4760783</span>
              <span>support@wavecore.app</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}