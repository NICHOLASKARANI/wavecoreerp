import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <nav className="flex items-center justify-between px-8 py-5 border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">WAVECORE<span className="text-blue-600 dark:text-blue-400">ERP</span></span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/10 transition">Sign In</Link>
          <Link href="/register" className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:from-blue-500 hover:to-purple-500 transition">Start Free - KES 1,000/mo</Link>
        </div>
      </nav>
      <section className="text-center py-32 px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-sm text-blue-700 dark:text-blue-300 mb-8">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> AI-Powered Enterprise ERP
        </div>
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
          The Future of{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Business Management</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          AI-powered ERP for inventory, accounting, HR, CRM, procurement, and analytics. Built for African businesses.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/register" className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-purple-200 dark:shadow-purple-900/30 hover:shadow-2xl transition">Get Started - KES 1,000/month</Link>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[{v:'10,000+',l:'Businesses'},{v:'KES 50B+',l:'Transactions'},{v:'99.9%',l:'Uptime'},{v:'24/7',l:'AI Support'}].map(s=><div key={s.l}><p className="text-3xl font-bold text-slate-900 dark:text-white">{s.v}</p><p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.l}</p></div>)}
        </div>
      </section>
      <section className="px-8 py-24 bg-white dark:bg-slate-900">
        <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white mb-16">Everything Your Business Needs</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            {icon:'ðŸ“¦',title:'Inventory',desc:'Real-time stock, batches, expiry, multi-warehouse'},
            {icon:'ðŸª',title:'POS System',desc:'Retail, Restaurant POS with M-Pesa, Cash, Card'},
            {icon:'ðŸ‘¥',title:'CRM',desc:'Leads, pipelines, loyalty, customer portal'},
            {icon:'ðŸ“Š',title:'Accounting',desc:'Double-entry, invoices, expenses, tax'},
            {icon:'ðŸ‘·',title:'HRM & Payroll',desc:'Employees, attendance, leave, PAYE, NSSF'},
            {icon:'ðŸ¤–',title:'AI Copilot',desc:'Sales forecasting, fraud detection, insights'},
          ].map(f=><div key={f.title} className="rounded-2xl border bg-white dark:bg-slate-800 dark:border-slate-700 p-8 hover:shadow-lg transition"><div className="text-4xl mb-4">{f.icon}</div><h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{f.title}</h3><p className="text-slate-500 dark:text-slate-400 text-sm">{f.desc}</p></div>)}
        </div>
      </section>
      <section className="px-8 py-24 bg-slate-50 dark:bg-slate-950 text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Simple Pricing</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-16">Start with KES 1,000/month</p>
        <div className="grid gap-6 md:grid-cols-4 max-w-5xl mx-auto">
          {[{n:'Starter',p:'1,000',u:'5 Users',f:['All Modules','POS','Inventory','CRM']},{n:'Professional',p:'3,000',u:'20 Users',f:['All Starter','Multi-Branch','Reports'],pop:true},{n:'Business',p:'7,500',u:'50 Users',f:['All Pro','API Access','E-Commerce']},{n:'Enterprise',p:'20,000',u:'Unlimited',f:['Custom','White-label','SLA']}].map(x=><div key={x.n} className={`rounded-2xl border bg-white dark:bg-slate-800 p-8 relative ${x.pop?'border-blue-500 ring-2 ring-blue-500 dark:border-blue-400':'border-slate-200 dark:border-slate-700'}`}>{x.pop&&<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white px-4 py-1 text-xs font-bold">POPULAR</span>}<h3 className="text-xl font-bold text-slate-900 dark:text-white">{x.n}</h3><p className="mt-4"><span className="text-4xl font-bold text-slate-900 dark:text-white">KES {x.p}</span><span className="text-slate-400">/mo</span></p><p className="text-sm text-slate-500 mt-1">{x.u}</p><ul className="mt-6 space-y-3">{x.f.map(f=><li key={f} className="text-sm text-slate-600 dark:text-slate-300"><span className="text-green-500 mr-2">âœ“</span>{f}</li>)}</ul><Link href="/register" className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition ${x.pop?'bg-gradient-to-r from-blue-600 to-purple-600 text-white':'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'}`}>Get Started</Link></div>)}
        </div>
        <p className="mt-8 text-slate-500">Pay via M-Pesa Till: <span className="font-bold text-slate-900 dark:text-white">4760783</span></p>
      </section>
      <footer className="border-t py-12 text-center text-sm text-slate-400">
        Â© 2026 WAVECORE Technologies Â· M-Pesa Till: 4760783 Â· support@wavecore.app
      </footer>
    </div>
  );
}