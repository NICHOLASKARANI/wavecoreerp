import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <span className="text-xl font-bold">WAVECORE<span className="text-blue-400">ERP</span></span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="rounded-lg bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10 transition">Sign In</Link>
          <Link href="/register" className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-medium hover:from-blue-500 hover:to-purple-500 shadow-lg">Start Free</Link>
        </div>
      </nav>
      <section className="text-center py-32 px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm mb-8">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          AI-Powered Enterprise ERP
        </div>
        <h1 className="text-6xl font-bold max-w-3xl mx-auto leading-tight">
          The Future of{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Business Management</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
          AI-powered ERP for inventory, accounting, HR, CRM, procurement, and analytics.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/register" className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition">Get Started - KES 1,000/month</Link>
        </div>
        <div className="mt-16 grid grid-cols-4 gap-8 max-w-2xl mx-auto text-center">
          {[{v:'10,000+',l:'Businesses'},{v:'KES 50B+',l:'Transactions'},{v:'99.9%',l:'Uptime'},{v:'24/7',l:'AI Support'}].map(s=><div key={s.l}><p className="text-3xl font-bold">{s.v}</p><p className="text-sm text-gray-400 mt-1">{s.l}</p></div>)}
        </div>
      </section>
    </div>
  );
}