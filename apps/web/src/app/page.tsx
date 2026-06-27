import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">WaveCore<span className="text-gray-400 font-normal">ERP</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 font-medium">Sign in</Link>
            <Link href="/register" className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">Start Free Trial</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The complete ERP platform for your business
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Inventory, accounting, POS, CRM, HR, payroll, procurement — all in one place. 
            KES 1,000/month. Every module included.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/register" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition shadow-sm">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-sm text-gray-500">No credit card required</span>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
            <span>✓ M-Pesa Till 4760783</span>
          </div>
        </div>
      </section>

      {/* Module Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Everything your business needs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Inventory Management', desc: 'Track stock levels, batches, expiry dates across multiple warehouses. Real-time updates.' },
            { title: 'Point of Sale', desc: 'Process sales with M-Pesa, cash, or card. Works offline. Print receipts. Retail and restaurant modes.' },
            { title: 'Accounting', desc: 'Double-entry ledger, invoicing, expenses, bank reconciliation, financial reports, tax compliance.' },
            { title: 'CRM', desc: 'Manage customers, leads, and loyalty programs. Track purchase history and send marketing campaigns.' },
            { title: 'HR & Payroll', desc: 'Employee records, attendance tracking, leave management, PAYE, NSSF, NHIF, payslips.' },
            { title: 'Procurement', desc: 'Supplier management, purchase orders, goods received notes, vendor payments and ratings.' },
            { title: 'Reports & Analytics', desc: 'Custom dashboards, KPI tracking, sales reports, inventory reports, financial statements.' },
            { title: 'AI Copilot', desc: 'Business insights, sales forecasting, fraud detection, cash flow predictions, smart recommendations.' },
            { title: 'Multi-Branch', desc: 'Manage multiple branches, warehouses, and companies from one account. Consolidated reports.' },
          ].map(m => (
            <div key={m.title} className="rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">{m.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing - Single Plan */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Simple pricing</h2>
          <p className="text-gray-500 mb-10">One plan. All features. No hidden costs.</p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">WaveCore ERP</h3>
            <p className="text-sm text-gray-500 mb-6">Complete business management platform</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-gray-900">KES 1,000</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-2 text-left mb-8">
              {[
                'All ERP modules included',
                'Unlimited users',
                'AI Copilot',
                'Mobile apps',
                'M-Pesa payments',
                'Email support',
                'Free updates',
                '14-day free trial',
              ].map(f => <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 flex-shrink-0" />{f}</li>)}
            </ul>
            <Link href="/register" className="block w-full rounded-md bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">Start Free Trial</Link>
            <p className="mt-3 text-xs text-gray-400">Pay via M-Pesa Till 4760783</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2026 WaveCore Technologies. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span>M-Pesa Till: 4760783</span>
            <span>KES 1,000/month</span>
            <span>support@wavecore.app</span>
          </div>
        </div>
      </footer>
    </div>
  );
}