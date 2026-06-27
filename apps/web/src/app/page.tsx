import Link from 'next/link';
import { Shield, Zap, Globe, BarChart3, TrendingUp, ArrowRight, Check, Star, Building2, Factory, Store, GraduationCap, Heart, Truck, Wheat, Wrench, Landmark, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/wavecoreerplogo.png" alt="WaveCore ERP" className="h-8 w-auto" />
            <span className="text-lg font-bold text-gray-900 hidden sm:inline">WAVECORE<span className="text-blue-600">ERP</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#industries" className="hover:text-blue-600 transition">Industries</a>
            <a href="#ai" className="hover:text-blue-600 transition">AI</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-600 hover:text-blue-600 transition font-medium">Sign in</Link>
            <Link href="/register" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition shadow-sm">Get Started</Link>
          </div>
        </div>
      </header>
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-700 mb-6">
                <Star className="h-4 w-4 fill-blue-500 text-blue-500" /> AI-Powered Enterprise Platform
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-gray-900">The AI Operating System for Business</h1>
              <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">One platform. One subscription. Every ERP module. Powered by artificial intelligence. Built for businesses in Africa and worldwide.</p>
              <div className="mt-8 flex items-center gap-4">
                <Link href="/register" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white hover:bg-blue-700 transition shadow-lg shadow-blue-200">Start Free Trial <ArrowRight className="h-5 w-5" /></Link>
                <p className="text-sm text-gray-400">KES 1,000/month<br />No hidden costs</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
                <span>Pay via M-Pesa Till <strong className="text-gray-700">4760783</strong></span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-1 shadow-2xl">
                <div className="rounded-xl bg-gray-900 p-6 text-white">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-red-500" /><div className="h-3 w-3 rounded-full bg-yellow-500" /><div className="h-3 w-3 rounded-full bg-green-500" /></div>
                    <span className="text-xs text-gray-400 ml-2">WaveCore ERP Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[{label:'Revenue',value:'KES 2.4M',color:'text-green-400'},{label:'Orders',value:'1,295',color:'text-blue-400'},{label:'Inventory',value:'8,450',color:'text-purple-400'},{label:'AI Score',value:'97.8%',color:'text-amber-400'}].map(c=><div key={c.label} className="rounded-lg bg-gray-800 p-3"><p className="text-xs text-gray-400">{c.label}</p><p className={`text-lg font-bold ${c.color}`}>{c.value}</p></div>)}
                  </div>
                  <div className="h-32 rounded-lg bg-gray-800 flex items-center justify-center"><BarChart3 className="h-12 w-12 text-gray-600" /></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white shadow-lg border px-4 py-2 flex items-center gap-2"><Shield className="h-5 w-5 text-green-500" /><span className="text-sm font-medium">SOC2 Compliant</span></div>
              <div className="absolute -top-4 -right-4 rounded-xl bg-white shadow-lg border px-4 py-2 flex items-center gap-2"><Zap className="h-5 w-5 text-amber-500" /><span className="text-sm font-medium">AI-Powered</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 border-y border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{v:'10,000+',l:'Businesses',icon:Building2},{v:'40+',l:'Countries',icon:Globe},{v:'KES 50B+',l:'Revenue Processed',icon:BarChart3},{v:'99.99%',l:'Uptime',icon:Shield}].map(s=><div key={s.l} className="text-center"><s.icon className="h-6 w-6 text-blue-500 mx-auto mb-2" /><p className="text-3xl font-bold text-gray-900">{s.v}</p><p className="text-sm text-gray-500 mt-1">{s.l}</p></div>)}
          </div>
        </div>
      </section>
      <section id="industries" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions for Every Industry</h2><p className="text-gray-500 max-w-xl mx-auto">Tailored ERP modules for your specific business needs.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{icon:Store,name:'Retail',desc:'POS, inventory, multi-store'},{icon:Factory,name:'Manufacturing',desc:'BOM, work orders, QC'},{icon:Heart,name:'Healthcare',desc:'Pharmacy POS, billing'},{icon:GraduationCap,name:'Education',desc:'Fee management, payroll'},{icon:Truck,name:'Logistics',desc:'Fleet tracking'},{icon:Wheat,name:'Agriculture',desc:'Supply chain'},{icon:Wrench,name:'Construction',desc:'Project costing'},{icon:Landmark,name:'Finance',desc:'Accounting, tax'}].map(ind=><div key={ind.name} className="group rounded-xl bg-white border border-gray-100 p-6 hover:border-blue-200 hover:shadow-md transition-all text-center"><ind.icon className="h-10 w-10 text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" /><h3 className="font-semibold text-gray-900">{ind.name}</h3><p className="text-xs text-gray-400 mt-1">{ind.desc}</p></div>)}
          </div>
        </div>
      </section>
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete ERP Modules</h2>
          <p className="text-gray-500 mb-12">18+ modules included in your KES 1,000/month subscription.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Accounting','POS','Inventory','CRM','Payroll','HRM','Procurement','Manufacturing','Warehouse','Assets','Projects','Help Desk','Fleet','Banking','Tax','Compliance','Reports','AI Copilot'].map(m=><span key={m} className="inline-flex items-center gap-2 rounded-full bg-gray-50 border border-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition cursor-default"><Check className="h-4 w-4 text-green-500" />{m}</span>)}
          </div>
        </div>
      </section>
      <section id="ai" className="py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Powered by Artificial Intelligence</h2>
          <p className="text-blue-200 mb-12 max-w-xl mx-auto">AI is integrated into every module, not bolted on.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[{icon:TrendingUp,title:'AI Accounting',desc:'Automated reconciliation'},{icon:BarChart3,title:'AI Forecasting',desc:'Sales predictions'},{icon:Shield,title:'AI Fraud Detection',desc:'Real-time anomaly detection'},{icon:Users,title:'AI HR',desc:'Smart payroll insights'}].map(f=><div key={f.title} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 text-left hover:bg-white/15 transition"><f.icon className="h-8 w-8 text-blue-300 mb-3" /><h3 className="font-semibold text-lg mb-1">{f.title}</h3><p className="text-sm text-blue-200">{f.desc}</p></div>)}
          </div>
        </div>
      </section>
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 mb-12">One subscription. All modules. No hidden costs.</p>
          <div className="rounded-3xl border-2 border-blue-500 bg-gradient-to-b from-blue-50 to-white p-10 shadow-xl shadow-blue-100">
            <img src="/wavecoreerplogo.png" alt="WaveCore" className="h-10 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">WaveCore ERP</h3>
            <div className="my-6"><span className="text-6xl font-bold text-blue-600">KES 1,000</span><span className="text-xl text-gray-400">/month</span></div>
            <p className="text-gray-500 mb-6">One subscription. Unlimited access to every ERP module.</p>
            <ul className="space-y-3 text-left max-w-xs mx-auto mb-8">
              {['All 18+ ERP Modules','Unlimited Users','AI Copilot Included','Mobile Apps','Email & Chat Support','Automatic Updates','M-Pesa Payments'].map(f=><li key={f} className="flex items-center gap-3 text-gray-700"><Check className="h-5 w-5 text-green-500 flex-shrink-0" />{f}</li>)}
            </ul>
            <Link href="/register" className="block w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition shadow-lg">Get Started for KES 1,000</Link>
            <p className="mt-4 text-sm text-gray-400">Pay via M-Pesa Till <strong className="text-gray-600">4760783</strong></p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1 justify-center"><Shield className="h-4 w-4 text-green-500" />No hidden fees</div>
            <div className="flex items-center gap-1 justify-center"><Zap className="h-4 w-4 text-amber-500" />Cancel anytime</div>
            <div className="flex items-center gap-1 justify-center"><Globe className="h-4 w-4 text-blue-500" />All countries</div>
          </div>
        </div>
      </section>
      <footer className="border-t border-gray-100 py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/wavecoreerplogo.png" alt="WaveCore" className="h-8" />
            <span className="text-sm text-gray-500">© 2026 WaveCore Technologies</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>M-Pesa Till: <strong className="text-gray-600">4760783</strong></span>
            <span>KES 1,000/month</span>
            <span>support@wavecore.app</span>
          </div>
        </div>
      </footer>
    </div>
  );
}