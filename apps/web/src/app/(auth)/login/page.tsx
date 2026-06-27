'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/stores/auth-store';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Mail, Lock, ArrowRight, Sun, Moon } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { theme, setTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const r = await login(email, password);
      if (r?.requiresMfa) router.push('/verify-otp?email='+email);
      else if (!r?.isSubscribed) router.push('/settings/subscription');
      else { toast.success('Welcome back!'); router.push('/dashboard'); }
    } catch { toast.error('Invalid credentials'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-xs text-center py-2">
        WaveCore ERP v2.0 — One plan, all modules, KES 1,000/month
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gray-900 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <span className="text-sm font-bold">WaveCore<span className="text-gray-400 font-normal">ERP</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <button onClick={() => setTheme(theme==='dark'?'light':'dark')} className="p-2 rounded-lg hover:bg-gray-100 transition">
              <Sun className="h-4 w-4 text-gray-500 dark:opacity-0 absolute" /><Moon className="h-4 w-4 text-gray-500 opacity-0 dark:opacity-100 absolute" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          {/* Login Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 p-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="h-10 w-10 rounded-xl bg-gray-900 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
            </div>

            <h1 className="text-xl font-bold text-center text-gray-900 mb-1">Welcome back</h1>
            <p className="text-sm text-gray-500 text-center mb-8">Sign in to WaveCore ERP</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Email address</label>
                <input type="email" placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)} required
                  className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 transition" />
              </div>

              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs font-medium text-gray-700">Password</label>
                  <Link href="/forgot-password" className="text-xs text-gray-500 hover:text-gray-900">Forgot?</Link>
                </div>
                <div className="relative">
                  <input type={showPassword?'text':'password'} placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} required
                    className="w-full h-11 px-4 pr-12 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 transition" />
                  <button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full h-11 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Sign in <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              No account? <Link href="/register" className="text-gray-900 font-semibold hover:underline">Start free trial</Link>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            KES 1,000/month · M-Pesa Till 4760783
          </p>
        </div>
      </div>
    </div>
  );
}