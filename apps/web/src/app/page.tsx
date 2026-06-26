import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <span className="text-xl font-bold">WAVECORE<span className="text-blue-400">ERP</span></span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-300 hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white">Pricing</a>
          <Link href="/login" className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/20">Sign In</Link>
          <Link href="/register" className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-medium hover:from-blue-500 hover:to-purple-500 shadow-lg">Start Free</Link>
        </div>
      </nav>
      <section className="relative px-8 py-24 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-300">AI-Powered Enterprise ERP Platform</span>
          </div>
          <h1 className="text-6xl font-bold leading-tight">The Future of<br /><span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Business Management</span></h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">AI-powered ERP that automates inventory, accounting, HR, CRM, and analytics. Built for African businesses.</p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/register" className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold hover:from-blue-500 hover:to-purple-500 shadow-xl">Get Started - KES 1,000/month</Link>
            <a href="#demo" className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold hover:bg-white/5">Watch Demo</a>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-8">
            {[{v:'10,000+',l:'Businesses'},{v:'KES 50B+',l:'Transactions'},{v:'99.9%',l:'Uptime'},{v:'24/7',l:'AI Support'}].map(s => <div key={s.l}><p className="text-3xl font-bold">{s.v}</p><p className="mt-1 text-sm text-gray-400">{s.l}</p></div>)}
          </div>
        </div>
      </section>
      <section id="pricing" className="px-8 py-24 bg-white/5 text-center">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-400 mb-16">Start with KES 1,000/month</p>
        <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
          {[{n:'Starter',p:'1,000',u:'5',f:['All Modules','POS','Inventory','CRM']},{n:'Professional',p:'3,000',u:'20',f:['All Starter','Multi-Branch','Reports'],pop:true},{n:'Business',p:'7,500',u:'50',f:['All Pro','API Access','E-Commerce']},{n:'Enterprise',p:'20,000',u:'∞',f:['Custom','White-label','SLA']}].map(x => <div key={x.n} className={`rounded-2xl border p-8 ${x.pop?'border-blue-500 bg-blue-500/10 ring-2 ring-blue-500':'border-white/10 bg-white/5'}`}>{x.pop&&<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-xs font-bold">POPULAR</span>}<h3 className="text-xl font-bold">{x.n}</h3><p className="mt-4"><span className="text-4xl font-bold">KES {x.p}</span>/mo</p><ul className="mt-6 space-y-3">{x.f.map(f=><li key={f} className="text-sm text-gray-300"><span className="text-green-400 mr-2">✓</span>{f}</li>)}</ul><Link href="/register" className={`mt-8 block w-full rounded-lg py-3 text-sm font-semibold ${x.pop?'bg-gradient-to-r from-blue-600 to-purple-600':'bg-white/10 hover:bg-white/20'}`}>Get Started</Link></div>)}
        </div>
        <p className="mt-8 text-sm text-gray-400">Pay via M-Pesa Till: <span className="font-bold text-white">4760783</span></p>
      </section>
      <footer className="border-t border-white/10 px-8 py-12 text-center">
        <p className="text-sm text-gray-400">© 2026 WAVECORE Technologies · M-Pesa Till: 4760783 · support@wavecore.app</p>
      </footer>
    </div>
  );
}